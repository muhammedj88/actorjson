import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const actors = [
      { actorId: 1, firstName: 'Mr. Nice', lastName: 'WAHLBERG', lastUpdate: '2006-02-15T06:34:33+02:00' },
      { actorId: 2, firstName: 'ED', lastName: 'CHASE', lastUpdate: '2006-02-15T06:34:33+02:00' },
      { actorId: 3, firstName: 'koko', lastName: 'WAHLBERG', lastUpdate: '2006-02-15T06:34:33+02:00' }
    ];
    return {actors};
  }
}
