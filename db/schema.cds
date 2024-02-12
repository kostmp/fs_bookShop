namespace bookshop;

using {managed} from '@sap/cds/common';

entity Books : managed {
    key ID   : Integer;
        name : String
}
