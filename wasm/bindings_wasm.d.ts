/* tslint:disable */
/* eslint-disable */
/**
* @param {string} code
* @param {boolean} allow_return_outside_function
* @returns {Uint8Array}
*/
export function parse(code: string, allow_return_outside_function: boolean): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {string}
*/
export function xxhash_base64_url(input: Uint8Array): string;
/**
* @param {string} query
* @param {any} opts
* @returns {any}
*/
export function browserslist(query: string, opts: any): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly parse: (a: number, b: number, c: number, d: number) => void;
  readonly xxhash_base64_url: (a: number, b: number) => void;
  readonly browserslist: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
