export const MINUS_ITEM = 'MINUS_ITEM' as const;
export const PLUS_ITEM = 'PLUS_ITEM' as const;
export const REMOVE_ITEM = 'REMOVE_ITEM' as const;

export const decrease = (id: number) => ({
    type: MINUS_ITEM,
    payload: id,
})
export const increase = (id: number) => ({
    type: PLUS_ITEM,
    payload: id,
})

export const remove = (id: number) => ({
    type: REMOVE_ITEM,
    payload: id,
})

export type CartAction = 
| ReturnType<typeof decrease>
| ReturnType<typeof increase>
| ReturnType<typeof remove>;