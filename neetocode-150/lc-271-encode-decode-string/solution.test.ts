import { Codec } from "./solution";
import { describe, it, expect, beforeEach } from "bun:test";

describe("271. Encode and Decode Strings", () => {
  let codec: Codec;

  beforeEach(() => {
    codec = new Codec();
  });

  describe("Basic Cases", () => {
    it("should handle simple string array", () => {
      const input = ["Hello", "World"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle single string", () => {
      const input = ["OnlyOneString"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle multiple short strings", () => {
      const input = ["a", "b", "c", "d"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty array", () => {
      const input: string[] = [];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle array with empty string", () => {
      const input = [""];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle array with multiple empty strings", () => {
      const input = ["", "", ""];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle mix of empty and non-empty strings", () => {
      const input = ["", "hello", "", "world", ""];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });
  });

  describe("Special Characters", () => {
    it("should handle strings with delimiter character #", () => {
      const input = ["a#b", "c#d#e"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle strings that look like encoded format", () => {
      const input = ["4#code", "10#tricky"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle strings with numbers", () => {
      const input = ["123", "456", "789"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle strings with special characters", () => {
      const input = ["we", "say", ":", "yes", "!@#$%"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle strings with newlines and tabs", () => {
      const input = ["hello\nworld", "foo\tbar"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle strings with spaces", () => {
      const input = ["hello world", "  spaces  ", "   "];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });
  });

  describe("Unicode and Extended ASCII", () => {
    it("should handle unicode characters", () => {
      const input = ["こんにちは", "世界", "🚀🎉"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle mixed ASCII and unicode", () => {
      const input = ["Hello", "世界", "Привет"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });
  });

  describe("Long Strings", () => {
    it("should handle long strings", () => {
      const longString = "a".repeat(199); // Max length 200
      const input = [longString, "short", longString];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle many strings", () => {
      const input = Array(99).fill("test"); // Max 100 strings
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });
  });

  describe("Encoding Consistency", () => {
    it("should produce consistent encoding", () => {
      const input = ["Hello", "World"];
      const encoded1 = codec.encode(input);
      const encoded2 = codec.encode(input);
      expect(encoded1).toEqual(encoded2);
    });

    it("should produce different encodings for different inputs", () => {
      const input1 = ["Hello", "World"];
      const input2 = ["World", "Hello"];
      const encoded1 = codec.encode(input1);
      const encoded2 = codec.encode(input2);
      expect(encoded1).not.toEqual(encoded2);
    });
  });

  describe("Stress Tests", () => {
    it("should handle worst case: all strings are delimiter characters", () => {
      const input = ["###", "####", "#"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });

    it("should handle worst case: strings that mimic length prefix", () => {
      const input = ["5#Hello", "10#", "0#"];
      const encoded = codec.encode(input);
      const decoded = codec.decode(encoded);
      expect(decoded).toEqual(input);
    });
  });
});
