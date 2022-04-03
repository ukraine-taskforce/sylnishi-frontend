import { SERVICE_TYPE } from './service';
import { Country } from './country';

export function parseServicesListCSV(csvText: string): { [key: string]: Country } {
  const countries: { [key: string]: Country } = {};

  const headerToIndex: { [key: string]: number } = {};

  csvText.split('\n').forEach((line, index) => {
    // Header row
    if (index === 0) {
      line.split(',').forEach((header, i) => {
        headerToIndex[header] = i;
      });
    } else {
      parseRow(line.split(','), countries, headerToIndex);
    }
  });

  return countries;
}

function parseRow(
  row: Array<string>,
  countries: { [key: string]: Country },
  headerToIndex: { [key: string]: number }
): void {
  const countryName = row[headerToIndex[SERVICE_DATASET_COLUMNS.COUNTRY]];
  const id = row[headerToIndex[SERVICE_DATASET_COLUMNS.ID]];

  if (!countryName || !id) {
    console.warn(`Dataset row missing country name and id.`);
    return;
  }

  if (!countries[countryName]) {
    countries[countryName] = {
      id: row[headerToIndex[SERVICE_DATASET_COLUMNS.ISO]],
      name: countryName,
      services: [],
    };
  }

  const country: Country = countries[countryName];
  country.services.push({
    id,
    name: row[headerToIndex[SERVICE_DATASET_COLUMNS.CATEGORY]],
    type: row[headerToIndex[SERVICE_DATASET_COLUMNS.TYPE]] as SERVICE_TYPE,
    path: row[headerToIndex[SERVICE_DATASET_COLUMNS.HYPERLINK]],
  });
}

const SERVICE_DATASET_COLUMNS = {
  ID: 'ID',
  COUNTRY: 'Country',
  CATEGORY: 'Category',
  HYPERLINK: 'Hyperlink',
  ISO: 'ISO Alpha 2 Code',
  TYPE: 'TYPE',
};
