using { db.creditRequests as db } from '../db/schema'; 

service prestamoservice {
    entity prestamosrv as projection on db.RequestsPre;  
      
}