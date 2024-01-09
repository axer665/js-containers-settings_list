import { Settings } from "../Settings";

let settings;

beforeEach(() => {
  settings = new Settings();
});

test('Set user settings', () => {
  settings.setUserSettings('theme', 'light');
  expect(settings.userSettings.get('theme')).toBe('light');
});

test('Merged default and user settings', () => {
  settings.setUserSettings('difficulty', 'hard');

  const mergedSettings = settings.settings;
  expect(mergedSettings.get('theme')).toBe('dark');
  expect(mergedSettings.get('music')).toBe('trance');
  expect(mergedSettings.get('difficulty')).toBe('hard');
});

test('Get default settings', () => {
  const mergedSettings = settings.settings;
  expect(mergedSettings.get('theme')).toBe('dark');
  expect(mergedSettings.get('music')).toBe('trance');
  expect(mergedSettings.get('difficulty')).toBe('easy');
});

test('Merged multiple user settings and default settings', () => {
  settings.setUserSettings('theme', 'light');
  settings.setUserSettings('music', 'rock');
  settings.setUserSettings('difficulty', 'medium');

  const mergedSettings = settings.settings;
  expect(mergedSettings.get('theme')).toBe('light');
  expect(mergedSettings.get('music')).toBe('rock');
  expect(mergedSettings.get('difficulty')).toBe('medium');
});

test('Start user settings size', () => {
  expect(settings.userSettings.size).toBe(0);
});