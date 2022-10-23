import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_array_recursive_union_implicit =
    _test_assert_equals(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        TSON.createAssertEquals<ArrayRecursiveUnionImplicit>(),
    );
