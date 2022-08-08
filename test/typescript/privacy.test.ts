import { test, expect } from "@jest/globals";
import { Privacy } from "../../dist/lib/firebolt-manage";

class ContentPrivacyProvider implements Privacy.ContentPolicyProvider {
  contentPolicy(
    parameters: object,
    session: Privacy.ProviderSession
  ): Promise<Privacy.ContentPolicy> {
    return Promise.resolve(null);
  }
}

class AdvertisingPrivacyProvider implements Privacy.AdvertisingPolicyProvider {
  advertisingPolicy(
    parameters: object,
    session: Privacy.ProviderSession
  ): Promise<object> {
    return Promise.resolve(null);
  }
}

test("Content Policy Provider", () => {
  Privacy.provide(
    "xrn:firebolt:capability:privacy:content",
    new ContentPrivacyProvider()
  );
  expect(1).toBe(1);
});

test("Advertising Policy Provider", () => {
  Privacy.provide(
    "xrn:firebolt:capability:privacy:advertising",
    new AdvertisingPrivacyProvider()
  );
  expect(1).toBe(1);
});

let listenerId: number;

test("Able to get TypeScript listenerId", () => {
  return Privacy.listen("limitAdTrackingChanged", () => {}).then(
    (id: number) => {
      listenerId = id;
      console.log(listenerId);
      expect(listenerId > 0).toBe(true);
    }
  );
});

test("privacy.shareWatchHistory()", () => {
  return Privacy.shareWatchHistory(String).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("privacy.enableRecommendations()", () => {
  return Privacy.enableRecommendations(String).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("privacy.rememberWatchedPrograms()", () => {
  return Privacy.rememberWatchedPrograms(String).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("privacy.once()", () => {
  Privacy.once;
  return Privacy.once("requestContentPolicy", () => {}).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("privacy.clear()", () => {
  const result = Privacy.clear(2);
  expect(result).toBeFalsy();
});

test("privacy.provide() with blank object", () => {
  expect(() => {
    Privacy.provide("xrn:firebolt:capability:privacy:content", {});
  }).toThrow();
});
