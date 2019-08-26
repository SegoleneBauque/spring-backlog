export class Task {
  id: number;
  titre: string;
  item: string;
  personInCharge: string;
  etat: string;
  acceptanceCriteria: Map<string, boolean>;
}
