import { useQueryState, parseAsString } from "nuqs";

export function useSearchParam(key: string = "search") {
  return useQueryState(
    key,
    parseAsString.withDefault("").withOptions({
      clearOnDefault: true,
    })
  );
}

export default useSearchParam;
