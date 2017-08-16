import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const assets = [
      { id: '0001', 
        location: 'South Gate',
        description: 'Gate Motor',
        assetGroup: 'Motor',
        manufacturer: 'General Electric',
        serviceVendor: "Jim's Electrical",
        model: 'superMotor123', 
        serial: '214x3ip',
        notes: 'This is a sample note.',
        riskRating: 4, 
        installDate: '19/07/2017',
        expectedLife: 6,
        replacementCost: 30000,
        photoLink: "http://breakingenergy.com/wp-content/uploads/sites/2/2011/11/ge-motor.png"
         },
        { id: '0002', 
        location: 'South Gate',
        description: 'Gate Motor',
        assetGroup: 'Motor',
        manufacturer: 'General Electric',
        serviceVendor: "Jim's Electrical",
        model: 'superMotor123', 
        serial: '314x3ip',
        notes: 'This is a sample note.',
        riskRating: 4, 
        installDate: '19/07/2017',
        expectedLife: 6,
        replacementCost: 30000,
        photoLink: "http://breakingenergy.com/wp-content/uploads/sites/2/2011/11/ge-motor.png"
         },
        { id: '0003', 
        location: 'South Gate',
        description: 'Gate Motor',
        assetGroup: 'Motor',
        manufacturer: 'General Electric',
        serviceVendor: "Jim's Electrical",
        model: 'superMotor123', 
        serial: '218x3ip',
        notes: 'This is a sample note.',
        riskRating: 4, 
        installDate: '19/07/2017',
        expectedLife: 6,
        replacementCost: 30000,
        photoLink: "http://breakingenergy.com/wp-content/uploads/sites/2/2011/11/ge-motor.png"
         },
    ];
    return {assets};
  }
}