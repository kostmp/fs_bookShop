namespace bookshop;

using {managed} from '@sap/cds/common';
using {cuid} from '@sap/cds/common';

entity Books : cuid, managed, {
    name : String
}
