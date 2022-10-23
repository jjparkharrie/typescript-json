import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_alias = _test_validate(
    "aliased object",
    ObjectAlias.generate,
    TSON.createValidate<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
