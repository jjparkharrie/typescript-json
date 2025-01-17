import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_literal_type = _test_is_stringify(
    "object literal",
    () => ObjectLiteralType,
    TSON.createIsStringify<typeof ObjectLiteralType>(),
);
