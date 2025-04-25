/**
 * The following code segments require correct parameters to be provided,
 * as they are frequently used and the parameters are already predefined in panorama-events.d.ts.
 */
$.DispatchEvent('BrowserGoToURL', 'test');
$.DispatchEvent('AddStyle', $('#test'), 'test_class');
$.DispatchEvent('DOTAGlobalSceneSetCameraEntity', 'ModelBackground', 'dashboard_cam', 4);
$.DispatchEvent('PlaySoundEffect', 'playercard.card_to_dust');
$.DispatchEvent('PlaySoundEffect', $.GetContextPanel(), 'playercard.card_to_dust');

// @ts-expect-error
$.DispatchEvent('AddStyle', $('#test'));
// @ts-expect-error
$.DispatchEvent('DOTAGlobalSceneSetCameraEntity', 'ModelBackground', 'dashboard_cam', '4');

/**
 * The following code are syntactically legal
 * since certain parameters may not be covered by standard validations
 * programmers must explicitly validate parameter correctness themselves.
 */
$.DispatchEvent('DOTASetCurrentDashboardPageFullscreen', true);
$.DispatchEvent('UnknownEvent', 'test');

/**
 * Test of register event handlers
 */
$.RegisterEventHandler('DragStart', $('#test'), (panelId, settings) => {});
$.RegisterEventHandler('DragStart', $('#test'), () => {});
// @ts-expect-error
$.RegisterEventHandler('DragStart', $('#test'), (panelId, settings, badParam) => {});

$.RegisterEventHandler('UnknownEvent', $('#test'), () => {});

$.RegisterForUnhandledEvent('DOTAHUDBuffClicked', () => {});
// @ts-expect-error
$.RegisterForUnhandledEvent('DOTAHUDBuffClicked', (panel) => {});

// users can define their own events and parameters.
declare global {
  interface PanoramaEvent {
    TestCustomEvent(panel: PanelBase, text: string): void;
  }
}

$.DispatchEvent('TestCustomEvent', $('#test'), 'some string');
// @ts-expect-error
$.DispatchEvent('TestCustomEvent', $('#test'), 2);
// @ts-expect-error
$.DispatchEvent('TestCustomEvent', $('#test'), 2);
// @ts-expect-error
$.DispatchEvent('TestCustomEvent', $('#test'), 'string', 2);

export {};
