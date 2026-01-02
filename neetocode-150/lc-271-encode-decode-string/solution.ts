/**
 * 271. Encode and Decode Strings
 *
 * Design an algorithm to encode a list of strings to a single string.
 * The encoded string is then sent over the network and is decoded back
 * to the original list of strings.
 *
 * Time Complexity: O(m) for both encode and decode
 * Space Complexity: O(m + n) where m is total length of strings, n is number of strings
 */

export class Codec {
  /**
   * Encodes a list of strings to a single string.
   * @param strs - Array of strings to encode
   * @returns Encoded string
   */
  encode(strs: string[]): string {
    if (!strs.length) return String.fromCharCode(257);
    return String.fromCharCode(257) + strs.join(String.fromCharCode(257));
  }

  /**
   * Decodes a single string to a list of strings.
   * @param s - Encoded string to decode
   * @returns Array of original strings
   */
  decode(s: string): string[] {
    return s.length === 1 ? [] : s.slice(1).split(String.fromCharCode(257));
  }
}
