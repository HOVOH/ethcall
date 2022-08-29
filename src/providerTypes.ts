import {Call} from "./call"

type BlockTag = number | 'latest' | 'pending';
type CallType = 'BASIC' | 'TRY_ALL' | 'TRY_EACH';

interface AllProvider {
    all<T1, T2>(calls: [Call<T1>, Call<T2>], block?: BlockTag): Promise<[T1, T2]>;
    all<T1, T2, T3>(
        calls: [Call<T1>, Call<T2>, Call<T3>],
        block?: BlockTag
    ): Promise<[T1, T2, T3]>;
    all<T1, T2, T3, T4>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>],
        block?: BlockTag
    ): Promise<[T1, T2, T3, T4]>;
    all<T1, T2, T3, T4, T5>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>, Call<T5>],
        block?: BlockTag
    ): Promise<[T1, T2, T3, T4, T5]>;
    all<T1, T2, T3, T4, T5, T6>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>, Call<T5>, Call<T6>],
        block?: BlockTag
    ): Promise<[T1, T2, T3, T4, T5, T6]>;
    all<T1, T2, T3, T4, T5, T6, T7>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>
        ],
        block?: BlockTag
    ): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
    all<T1, T2, T3, T4, T5, T6, T7, T8>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>,
            Call<T8>
        ],
        block?: BlockTag
    ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>,
            Call<T8>,
            Call<T9>
        ],
        block?: BlockTag
    ): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    all<T>(calls: Call<T>[], block?: BlockTag): Promise<T[]>;
}

interface TryAllProvider {
    tryAll<T1, T2>(
        calls: [Call<T1>, Call<T2>],
        block?: BlockTag
    ): Promise<[T1 | null, T2 | null]>;
    tryAll<T1, T2, T3>(
        calls: [Call<T1>, Call<T2>, Call<T3>],
        block?: BlockTag
    ): Promise<[T1 | null, T2 | null, T3 | null]>;
    tryAll<T1, T2, T3, T4>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>],
        block?: BlockTag
    ): Promise<[T1 | null, T2 | null, T3 | null, T4 | null]>;
    tryAll<T1, T2, T3, T4, T5>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>, Call<T5>],
        block?: BlockTag
    ): Promise<[T1 | null, T2 | null, T3 | null, T4 | null, T5 | null]>;
    tryAll<T1, T2, T3, T4, T5, T6>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>, Call<T5>, Call<T6>],
        block?: BlockTag
    ): Promise<
        [T1 | null, T2 | null, T3 | null, T4 | null, T5 | null, T6 | null]
        >;
    tryAll<T1, T2, T3, T4, T5, T6, T7>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>
        ],
        block?: BlockTag
    ): Promise<
        [
                T1 | null,
                T2 | null,
                T3 | null,
                T4 | null,
                T5 | null,
                T6 | null,
                T7 | null
        ]
        >;
    tryAll<T1, T2, T3, T4, T5, T6, T7, T8>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>,
            Call<T8>
        ],
        block?: BlockTag
    ): Promise<
        [
                T1 | null,
                T2 | null,
                T3 | null,
                T4 | null,
                T5 | null,
                T6 | null,
                T7 | null,
                T8 | null
        ]
        >;
    tryAll<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>,
            Call<T8>,
            Call<T9>
        ],
        block?: BlockTag
    ): Promise<
        [
                T1 | null,
                T2 | null,
                T3 | null,
                T4 | null,
                T5 | null,
                T6 | null,
                T7 | null,
                T8 | null,
                T9 | null
        ]
        >;
    tryAll<T>(calls: Call<T>[], block?: BlockTag): Promise<(T | null)[]>;
}

interface TryEachProvider {
    tryEach<T1, T2>(
        calls: [Call<T1>, Call<T2>],
        canFail: boolean[],
        block?: BlockTag
    ): Promise<[T1 | null, T2 | null]>;
    tryEach<T1, T2, T3>(
        calls: [Call<T1>, Call<T2>, Call<T3>],
        canFail: boolean[],
        block?: BlockTag
    ): Promise<[T1 | null, T2 | null, T3 | null]>;
    tryEach<T1, T2, T3, T4>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>],
        canFail: boolean[],
        block?: BlockTag
    ): Promise<[T1 | null, T2 | null, T3 | null, T4 | null]>;
    tryEach<T1, T2, T3, T4, T5>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>, Call<T5>],
        canFail: boolean[],
        block?: BlockTag
    ): Promise<[T1 | null, T2 | null, T3 | null, T4 | null, T5 | null]>;
    tryEach<T1, T2, T3, T4, T5, T6>(
        calls: [Call<T1>, Call<T2>, Call<T3>, Call<T4>, Call<T5>, Call<T6>],
        canFail: boolean[],
        block?: BlockTag
    ): Promise<
        [T1 | null, T2 | null, T3 | null, T4 | null, T5 | null, T6 | null]
        >;
    tryEach<T1, T2, T3, T4, T5, T6, T7>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>
        ],
        canFail: boolean[],
        block?: BlockTag
    ): Promise<
        [
                T1 | null,
                T2 | null,
                T3 | null,
                T4 | null,
                T5 | null,
                T6 | null,
                T7 | null
        ]
        >;
    tryEach<T1, T2, T3, T4, T5, T6, T7, T8>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>,
            Call<T8>
        ],
        canFail: boolean[],
        block?: BlockTag
    ): Promise<
        [
                T1 | null,
                T2 | null,
                T3 | null,
                T4 | null,
                T5 | null,
                T6 | null,
                T7 | null,
                T8 | null
        ]
        >;
    tryEach<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
        calls: [
            Call<T1>,
            Call<T2>,
            Call<T3>,
            Call<T4>,
            Call<T5>,
            Call<T6>,
            Call<T7>,
            Call<T8>,
            Call<T9>
        ],
        canFail: boolean[],
        block?: BlockTag
    ): Promise<
        [
                T1 | null,
                T2 | null,
                T3 | null,
                T4 | null,
                T5 | null,
                T6 | null,
                T7 | null,
                T8 | null,
                T9 | null
        ]
        >;
    tryEach<T>(calls: Call<T>[], block?: BlockTag): Promise<(T | null)[]>;
}

export type IMulticallProvider = AllProvider & TryAllProvider & TryEachProvider;
export {BlockTag, CallType};
