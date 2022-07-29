import { test, expect } from "@jest/globals";
import {
  ClosedCaptions,
  VoiceGuidance,
  Account,
  AcknowledgeChallenge,
  Device,
  Keyboard,
  PinChallenge,
  LifecycleManagement,
  Privacy,
} from "../../dist/lib/firebolt-manage";

class AccPovider implements Account.SessionProvider {
  session(
    parameters: void,
    session: Account.FocusableProviderSession
  ): Promise<object> {
    return Promise.resolve(null);
  }
}

class ACKPovider implements AcknowledgeChallenge.ChallengeProvider {
  challenge(
    parameters: object,
    session: AcknowledgeChallenge.FocusableProviderSession
  ): Promise<AcknowledgeChallenge.GrantResult> {
    return Promise.resolve(null);
  }
}

class VGProvider implements VoiceGuidance.SettingsProvider {
  settings(
    parameters: void,
    session: object
  ): Promise<VoiceGuidance.VoiceGuidanceSettings> {
    return Promise.resolve(null);
  }
}

class CCProvider implements ClosedCaptions.SettingsProvider {
  settings(
    parameters: object,
    session: ClosedCaptions.ProviderSession
  ): Promise<ClosedCaptions.ClosedCaptionsSettings> {
    session.correlationId;
    return Promise.resolve(null);
  }
}

class DeviceProvider implements Device.DeviceSettingsProvider {
  name(parameters: object, session: Device.ProviderSession): Promise<string> {
    return Promise.resolve(null);
  }
  postalCode(
    parameters: object,
    session: Device.ProviderSession
  ): Promise<string> {
    return Promise.resolve(null);
  }
}

class KBProvider implements Keyboard.KeyboardInputProvider {
  standard(
    parameters: Keyboard.KeyboardParameters,
    session: Keyboard.FocusableProviderSession
  ): Promise<Keyboard.KeyboardResult> {
    return Promise.resolve(null);
  }
  password(
    parameters: Keyboard.KeyboardParameters,
    session: Keyboard.FocusableProviderSession
  ): Promise<Keyboard.KeyboardResult> {
    return Promise.resolve(null);
  }
  email(
    parameters: Keyboard.KeyboardParameters,
    session: Keyboard.FocusableProviderSession
  ): Promise<Keyboard.KeyboardResult> {
    return Promise.resolve(null);
  }
}

class PCProvider implements PinChallenge.ChallengeProvider {
  challenge(
    parameters: object,
    session: PinChallenge.FocusableProviderSession
  ): Promise<PinChallenge.PinChallengeResult> {
    return Promise.resolve(null);
  }
}

class LCMProvider implements LifecycleManagement.LifecycleAppProvider {
  ready(
    parameters: LifecycleManagement.LifecycleReadyParameters,
    session: LifecycleManagement.ProviderSession
  ): Promise<void> {
    return Promise.resolve(null);
  }
  close(
    parameters: LifecycleManagement.LifecycleCloseParameters,
    session: LifecycleManagement.ProviderSession
  ): Promise<void> {
    return Promise.resolve(null);
  }
  finished(
    parameters: LifecycleManagement.LifecycleFinishedParameters,
    session: LifecycleManagement.ProviderSession
  ): Promise<void> {
    return Promise.resolve(null);
  }
}

class PrivacyProvider implements Privacy.ContentPolicyProvider {
  contentPolicy(
    parameters: object,
    session: Privacy.ProviderSession
  ): Promise<Privacy.ContentPolicy> {
    return Promise.resolve(null);
  }
}

test("VoiceGuidance.provide() declarations ", () => {
  VoiceGuidance.provide(
    "xrn:firebolt:capability:settings:voiceguidance",
    new VGProvider()
  );
  expect(1).toBe(1);
});

test("ClosedCaptions.provide() declarations ", () => {
  ClosedCaptions.provide(
    "xrn:firebolt:capability:settings:closedcaptions",
    new CCProvider()
  );
  expect(1).toBe(1);
});

test("Account.provide() declarations", () => {
  Account.provide("xrn:firebolt:capability:account:session", new AccPovider());
  expect(1).toBe(1);
});

test("AcknowledgeChallenge.provide() declarations", () => {
  AcknowledgeChallenge.provide(
    "xrn:firebolt:capability:usergrant:acknowledgechallenge",
    new ACKPovider()
  );
  expect(1).toBe(1);
});

test("Device.provide() declarations", () => {
  Device.provide(
    "xrn:firebolt:capability:settings:device",
    new DeviceProvider()
  );
  expect(1).toBe(1);
});

test("Keyboard.provide() declarations", () => {
  Keyboard.provide("xrn:firebolt:capability:input:keyboard", new KBProvider());
  expect(1).toBe(1);
});

test("PinChallenge.provide() declarations", () => {
  PinChallenge.provide(
    "xrn:firebolt:capability:usergrant:pinchallenge",
    new PCProvider()
  );
  expect(1).toBe(1);
});

test("LifecycleManagement.provide() declarations", () => {
  LifecycleManagement.provide(
    "xrn:firebolt:capability:app:lifecycle",
    new LCMProvider()
  );
  expect(1).toBe(1);
});

test("privacy.provide() declarations", () => {
  Privacy.provide(
    "xrn:firebolt:capability:privacy:content",
    new PrivacyProvider()
  );
  expect(1).toBe(1);
});
