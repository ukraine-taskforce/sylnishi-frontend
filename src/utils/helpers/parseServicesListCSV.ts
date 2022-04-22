import { Country } from '@models/country';
import { ServiceType } from '@models/service';

const SERVICE_DATASET_COLUMNS = {
  ID: 'ID',
  COUNTRY: 'Country',
  CATEGORY: 'Category',
  HYPERLINK: 'Hyperlink',
  ISO: 'ISO Alpha 2 Code',
  TYPE: 'TYPE',
};

function parseRow(
  row: Array<string>,
  countries: { [key: string]: Country },
  headerToIndex: { [key: string]: number }
): { [key: string]: Country } {
  const countryName = row[headerToIndex[SERVICE_DATASET_COLUMNS.COUNTRY]];
  const id = row[headerToIndex[SERVICE_DATASET_COLUMNS.ID]];
  const countriesCopy = { ...countries };

  if (!countryName || !id) {
    // console.warn(`Dataset row missing country name and id.`);
    return countriesCopy;
  }

  if (!countriesCopy[countryName]) {
    countriesCopy[countryName] = {
      id: row[headerToIndex[SERVICE_DATASET_COLUMNS.ISO]],
      name: countryName,
      services: [],
    };
  }

  const country: Country = countriesCopy[countryName];
  country.services.push({
    id,
    category: row[headerToIndex[SERVICE_DATASET_COLUMNS.CATEGORY]],
    type: row[headerToIndex[SERVICE_DATASET_COLUMNS.TYPE]] as ServiceType,
    path: row[headerToIndex[SERVICE_DATASET_COLUMNS.HYPERLINK]],
  });
  return countriesCopy;
}

function parseServicesListCSV(csvText: string): { [key: string]: Country } {
  let countries: { [key: string]: Country } = {};

  const headerToIndex: { [key: string]: number } = {};

  csvText.split('\n').forEach((line, index) => {
    // Header row
    if (index === 0) {
      line.split(',').forEach((header, i) => {
        headerToIndex[header] = i;
      });
    } else {
      countries = parseRow(line.split(','), countries, headerToIndex);
    }
  });

  return countries;
}

export default parseServicesListCSV;
