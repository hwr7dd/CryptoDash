import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DevicesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SchedulesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Devices {
  readonly id: string;
  readonly name?: string;
  readonly status?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Devices, DevicesMetaData>);
  static copyOf(source: Devices, mutator: (draft: MutableModel<Devices, DevicesMetaData>) => MutableModel<Devices, DevicesMetaData> | void): Devices;
}

export declare class Schedules {
  readonly id: string;
  readonly name?: string;
  readonly starthour?: number;
  readonly endhour?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Schedules, SchedulesMetaData>);
  static copyOf(source: Schedules, mutator: (draft: MutableModel<Schedules, SchedulesMetaData>) => MutableModel<Schedules, SchedulesMetaData> | void): Schedules;
}