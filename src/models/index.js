// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Devices, Schedules } = initSchema(schema);

export {
  Devices,
  Schedules
};