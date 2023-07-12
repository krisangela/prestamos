using { Currency,managed,sap,cuid } from '@sap/cds/common';

namespace db.creditRequests;
entity RequestsPre : cuid,managed {
    nombre          : String(255);
    apellido        : String(255); 
    dni             : Integer;
    email           : String(255);
    tipoPersona     : String(255); 
    salarioMensual  : Decimal(34,2);
    montoPrestamo   : Decimal(34,2);
}