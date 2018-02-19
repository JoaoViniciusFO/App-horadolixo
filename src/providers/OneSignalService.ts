import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

@Injectable()
export class OneSignalService {
    constructor(private oneSignal: OneSignal){
        // this.init();
        // this.setSubscribed();
    }

    public init(){
        this.oneSignal.startInit("c77a3bc3-5c70-4cef-8da6-c1901c3ed24f", "861044543054");
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.endInit();
    }

    public getAppId(){
        return this.oneSignal.getIds();
    }

    public setSubscribed(){
        this.oneSignal.getPermissionSubscriptionState().then((status)=>{
            if (!status.subscriptionStatus.subscribed) {
                status.subscriptionStatus.subscribed = true;
            }
        });
    }
}