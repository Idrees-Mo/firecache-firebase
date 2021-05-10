import { Injectable } from '@angular/core';
import { FirebaseClient } from 'firecache';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FirebaseProviderService {
  app: FirebaseClient<any, any, any>;

  constructor() {
    this.app = new FirebaseClient(environment.firebaseConfig);
    // this.app.PatchRootState({buildingId: 'jdbfjksbdkjfbakjdsbnfk',customerId:'kjsdhfkjahsdf'});
  }
}
