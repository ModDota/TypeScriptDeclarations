interface PanoramaPanelNameMap {
    Panel: Panel;
    Label: LabelPanel;
    Image: ImagePanel;
    DOTAAbilityImage: AbilityImage;
    DOTAItemImage: ItemImage;
    DOTAHeroImage: HeroImage;
    ContextMenuScript: ContextMenuScriptPanel;
    DOTAScenePanel: ScenePanel;
    RadioButton: RadioButton;
    TextButton: TextButton;
    DOTASettingsCheckbox: SettingsCheckbox;
    ToggleButton: ToggleButton;
    DOTAHUDShopTextEntry: HUDShopTextEntry;
    TextEntry: TextEntry;
    DropDown: DropDown;
    SlottedSlider: SlottedSlider;
    Slider: SliderPanel;
    ProgressBar: ProgressBar;
    CircularProgressBar: CircularProgressBar;
    DOTAUserRichPresence: UserRichPresence;
    DOTAUserName: UserName;
    DOTAHeroMovie: HeroMovie;
    HTML: HTML;
    DOTAAccountLinkHTML: AccountLinkHTML;
    DOTAHTMLPanel: HTMLPanel;
    DOTAHeroSetList: HeroSetList;
    Carousel: CarouselPanel;
    DOTAStoreCustomControls: StoreCustomControls;
    Button: Button;
    DOTAAvatarImage: AvatarImage;
}

type PanelEvent =
    | 'onactivate'
    | 'oncancel'
    | 'oncontextmenu'
    | 'ondblclick'
    | 'ondeselect'
    | 'oneconsetloaded'
    | 'onfilled'
    | 'onfindmatchend'
    | 'onfindmatchstart'
    | 'onfocus'
    | 'oninputsubmit'
    | 'onload'
    | 'onmouseactivate'
    | 'onmouseout'
    | 'onmouseover'
    | 'onmovedown'
    | 'onmoveleft'
    | 'onmoveright'
    | 'onmoveup'
    | 'onnotfilled'
    | 'onpagesetupsuccess'
    | 'onpopupsdismissed'
    | 'onselect'
    | 'ontabforward'
    | 'ontextentrychange'
    | 'ontextentrysubmit'
    | 'ontooltiploaded'
    | 'onvaluechanged';

interface PanelBase {
    readonly paneltype: string;
    rememberchildfocus: boolean;

    SetPanelEvent(event: PanelEvent, handler: () => void): void;
    RunScriptInPanelContext(script: string): void;
}

interface Panel extends PanelBase {
    readonly style: VCSSStyleDeclaration;

    readonly scrolloffset_x: number;
    readonly scrolloffset_y: number;

    readonly actualxoffset: number;
    readonly actualyoffset: number;

    readonly actuallayoutwidth: number;
    readonly actuallayoutheight: number;

    readonly desiredlayoutwidth: number;
    readonly desiredlayoutheight: number;

    readonly contentwidth: number;
    readonly contentheight: number;

    readonly layoutfile: string;
    readonly id: string;

    // get(): number | null; set(): number | 'auto' | null;
    selectionpos_x: number | null;
    selectionpos_y: number | null;

    // get(): number | null; set(): number | 'auto' | null;
    tabindex: number | null;

    hittestchildren: boolean;
    hittest: boolean;
    inputnamespace: string;
    defaultfocus: string;

    checked: boolean;
    enabled: boolean;
    visible: boolean;

    IsValid(): boolean;

    AddClass(name: string): void;
    RemoveClass(name: string): void;
    BAscendantHasClass(name: string): boolean;
    BHasClass(name: string): boolean;
    SetHasClass(name: string, active: boolean): void;
    ToggleClass(name: string): void;
    SwitchClass(name: string, replacement: string): void;
    TriggerClass(name: string): void;

    ClearPanelEvent(event: PanelEvent): void;

    SetDraggable(draggable: boolean): void;
    IsDraggable(): boolean;

    GetChildCount(): number;
    GetChild(index: number): Panel | null;
    GetChildIndex(child: Panel): number;
    Children(): Panel[];

    FindChildrenWithClassTraverse(classname: string): Panel[];

    GetParent(): Panel | null;
    SetParent(parent: Panel): void;

    FindChild(childId: string): Panel | null;
    FindChildTraverse(childId: string): Panel | null;
    FindChildInLayoutFile(childId: string): Panel | null;
    FindPanelInLayoutFile(id: string): Panel | null;

    RemoveAndDeleteChildren(): void;

    MoveChildBefore(child: PanelBase, beforeChild: PanelBase): void;
    MoveChildAfter(child: PanelBase, afterChild: PanelBase): void;

    GetPositionWithinWindow(): { x: number; y: number };
    /**
     * Sets whether to update panel with style changes
     */
    ApplyStyles(bool: boolean): void;
    ClearPropertyFromCode(unknown: string): void;

    DeleteAsync(time: number): void;

    BIsTransparent(): boolean;
    BAcceptsInput(): boolean;
    BAcceptsFocus(): boolean;
    SetFocus(): void; // ??
    UpdateFocusInContext(): void; // ??

    BHasHoverStyle(): boolean;
    SetAcceptsFocus(value: boolean): void; // ??
    SetDisableFocusOnMouseDown(value: boolean): void; // ??
    BHasKeyFocus(): boolean;
    SetScrollParentToFitWhenFocused(value: boolean): void; // ??
    BScrollParentToFitWhenFocused(): boolean;

    IsSelected(): boolean;
    BHasDescendantKeyFocus(): boolean;

    BLoadLayout(path: string, overrideExisting: boolean, partialLayout: boolean): boolean;
    BLoadLayoutFromString(layout: string, overrideExisting: boolean, partialLayout: boolean): boolean;
    LoadLayoutFromStringAsync(layout: string, overrideExisting: boolean, partialLayout: boolean): void;
    LoadLayoutAsync(path: string, overrideExisting: boolean, partialLayout: boolean): void;

    BLoadLayoutSnippet(snippetname: string): boolean;
    BCreateChildren(html: string): boolean;

    SetTopOfInputContext(): void; // ????
    SetDialogVariable(name: string, value: any): void;
    SetDialogVariableInt(name: string, value: number): void;
    SetDialogVariableTime(name: string, value: number): void;

    ScrollToTop(): void;
    ScrollToBottom(): void;
    ScrollToLeftEdge(): void;
    ScrollToRightEdge(): void;

    ScrollParentToMakePanelFit(): void;
    BCanSeeInParentScroll(): boolean;

    GetAttributeInt(name: string, defaultValue: number): number;
    GetAttributeString(name: string, defaultValue: string): string;
    GetAttributeUInt32(name: string, defaultValue: number): number;
    SetAttributeInt(name: string, value: number): void;
    SetAttributeString(name: string, value: string): void;
    SetAttributeUInt32(name: string, value: number): void;

    SetInputNamespace(namespace: string): void; // ??

    RegisterForReadyEvents(callback: (event: object) => void): void; // ????

    BReadyForDisplay(): boolean;
    SetReadyForDisplay(value: boolean): void; // ???

    SetPositionInPixels(x: number, y: number, z: number): void;

    Data(): object;
}

interface LabelPanel extends Panel {
    text: string;
    html: boolean;
}

type ScalingFunction =
    | 'none'
    | 'stretch' // the default
    | 'stretchx'
    | 'stretchy'
    | 'stretch-to-fit-preserve-aspect'
    | 'stretch-to-fit-x-preserve-aspect'
    | 'stretch-to-fit-y-preserve-aspect'
    | 'stretch-to-cover-preserve-aspect';

interface ImagePanel extends Panel {
    /**
     * Sets the source of this Image.
     *
     * @example
     * image.SetImage("file://{images}/custom_image.png");
     * image.SetImage("s2r://panorama/images/hud/reborn/icon_glyph_on_psd.vtex");
     */
    SetImage(path: string): void;
    SetScaling(scale: ScalingFunction): void;
}

interface AbilityImage extends ImagePanel {
    abilityname: string;
    contextEntityIndex: AbilityEntityIndex;
}

interface ItemImage extends ImagePanel {
    itemname: string;
    contextEntityIndex: ItemEntityIndex;
}

interface HeroImage extends ImagePanel {
    heroid: HeroID;
    heroname: string;
    heroimagestyle: 'icon' | 'portrait' | 'landscape';
}

interface ContextMenuScriptPanel extends Panel {
    GetContentsPanel(): Panel;
}

type WeekendTourneyTrophyScene = ScenePanel;
interface ScenePanel extends Panel {
    FireEntityInput(entityID: string, inputName: string, value: string): void;
    PlayEntitySoundEvent(arg1: any, arg2: any): number;
    SetUnit(unitName: string, environment: string): void;
    GetPanoramaSurfacePanel(): Panel;
}

interface RadioButton extends Panel {
    GetSelectedButton(): RadioButton;
}

interface TextButton extends Panel {
    text: string;
}

type SettingsCheckbox = ToggleButton;
interface ToggleButton extends Panel {
    text: string;
    SetSelected(value: boolean): void;
}

type HUDShopTextEntry = TextEntry;
interface TextEntry extends Panel {
    text: string;

    RaiseChangeEvents(bool: boolean): void;

    SelectAll(): void;
    ClearSelection(): void;

    GetMaxCharCount(): number;
    SetMaxChars(value: number): void;

    GetCursorOffset(): number;
    SetCursorOffset(value: number): void;
}

interface DropDown extends Panel {
    HasOption(id: string): boolean;
    AddOption(panel: Panel): void;
    RemoveOption(id: string): void;
    RemoveAllOptions(): void;

    GetSelected(): Panel;
    SetSelected(id: string): void;

    AccessDropDownMenu(): Panel;
    FindDropDownMenuChild(string: string): Panel;
}

type SlottedSlider = SliderPanel;
interface SliderPanel extends PanelBase {
    value: number;
    min: number;
    max: number;

    default: number;
    increment: number;
    mousedown: boolean;

    SetDirection(value: any): void; // ??
    SetRequiresSelection(value: boolean): void;
    SetShowDefaultValue(value: boolean): void;
    SetValueNoEvents(value: number): void;
}

interface ProgressBar extends Panel {
    value: number;
    min: number;
    max: number;
}

// Needs _BG and _FG styles, see lower hud hero exp
interface CircularProgressBar extends PanelBase {
    value: number;
    min: number;
    max: number;
}

type UserRichPresence = UserName;
interface UserName extends Panel {
    steamid: string;
    accountid: string;
}

interface HeroMovie extends Panel {
    heroname: string;
    heroid: HeroID;
}

type HTML = HTMLPanel;
type AccountLinkHTML = HTMLPanel;
type StoreCustomControls = HTMLPanel;
interface HTMLPanel extends Panel {
    SetURL(url: string): void;
    SetIgnoreCursor(value: boolean): void;
    RunJavascript(js: string): void;
}

type HeroSetList = CarouselPanel;
interface CarouselPanel extends Panel {
    GetFocusIndex(): number;
    GetFocusChild(): Panel;
    SetSelectedChild(selected: Panel): void;
}

interface Button extends Panel {}

interface AvatarImage extends Panel {
    steamid: string;
}
