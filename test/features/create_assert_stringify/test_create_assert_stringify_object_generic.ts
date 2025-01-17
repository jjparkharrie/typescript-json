import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_generic =
    _test_assert_stringify(
        "generic object",
        ObjectGeneric.generate,
        TSON.createAssertStringify<ObjectGeneric>(),
        ObjectGeneric.SPOILERS,
    );
