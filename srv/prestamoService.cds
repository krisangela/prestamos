using { db.creditRequests as db } from '../db/schema';


service prestamoService {

    entity prestamoSrv as projection on db.RequestsPre;

}