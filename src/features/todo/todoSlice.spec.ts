import todoReducer, { TodoState, add, remove } from "./todoSlice"

describe("counter reducer", () => {
  const initialState: TodoState = {
    loading: false,
    items: [],
  }
  it("should handle initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual({
      loading: false,
      items: [],
    })
  })

  it("should handle add", () => {
    let actual = todoReducer(initialState, add("testing1"))
    expect(
      actual.items.length === 1 && actual.items[0].description === "testing1",
    ).toBeTruthy()
    actual = todoReducer(actual, add("testing2"))
    expect(
      actual.items.length === 2 && actual.items[1].description === "testing2",
    ).toBeTruthy()
  })

  it("should handle id when adding", () => {
    let actual = todoReducer(initialState, add("testing1"))
    expect(
      actual.items.length === 1 && typeof actual.items[0].id === "number",
    ).toBeTruthy()
    actual = todoReducer(actual, add("testing2"))
    expect(
      actual.items.length === 2 &&
        typeof actual.items[1].id === "number" &&
        actual.items[0].id !== actual.items[1].id,
    ).toBeTruthy()
  })

  it("should handle remove", () => {
    let actual = todoReducer(initialState, add("testing1"))
    actual = todoReducer(actual, add("testing2"))
    actual = todoReducer(actual, add("testing3"))
    const toRemove = actual.items[1].id
    actual = todoReducer(actual, remove(toRemove))
    expect(
      actual.items.length === 2 &&
        actual.items.find((item) => item.id !== toRemove),
    ).toBeTruthy()
  })
})
