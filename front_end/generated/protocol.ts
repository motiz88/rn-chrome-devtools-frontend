// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * This file is auto-generated, do not edit manually. *
 * Re-generate with: npm run generate-protocol-resources.
 */


export type integer = number;
export type binary = string;
export type EnumerableEnum<T> = {[K in keyof T]: T[K]};
export interface ProtocolResponseWithError {
  /** Returns an error message if the request failed. */
  getError(): string|undefined;
}
type OpaqueType<Tag extends string> = {protocolOpaqueTypeTag: Tag};
type OpaqueIdentifier<RepresentationType, Tag extends string> = RepresentationType&OpaqueType<Tag>;

export namespace Accessibility {

  /**
   * Unique accessibility node identifier.
   */
  export type AXNodeId = OpaqueIdentifier<string, 'Protocol.Accessibility.AXNodeId'>;

  /**
   * Enum of possible property types.
   */
  export const enum AXValueType {
    Boolean = 'boolean',
    Tristate = 'tristate',
    BooleanOrUndefined = 'booleanOrUndefined',
    Idref = 'idref',
    IdrefList = 'idrefList',
    Integer = 'integer',
    Node = 'node',
    NodeList = 'nodeList',
    Number = 'number',
    String = 'string',
    ComputedString = 'computedString',
    Token = 'token',
    TokenList = 'tokenList',
    DomRelation = 'domRelation',
    Role = 'role',
    InternalRole = 'internalRole',
    ValueUndefined = 'valueUndefined',
  }

  /**
   * Enum of possible property sources.
   */
  export const enum AXValueSourceType {
    Attribute = 'attribute',
    Implicit = 'implicit',
    Style = 'style',
    Contents = 'contents',
    Placeholder = 'placeholder',
    RelatedElement = 'relatedElement',
  }

  /**
   * Enum of possible native property sources (as a subtype of a particular AXValueSourceType).
   */
  export const enum AXValueNativeSourceType {
    Description = 'description',
    Figcaption = 'figcaption',
    Label = 'label',
    Labelfor = 'labelfor',
    Labelwrapped = 'labelwrapped',
    Legend = 'legend',
    Rubyannotation = 'rubyannotation',
    Tablecaption = 'tablecaption',
    Title = 'title',
    Other = 'other',
  }

  /**
   * A single source for a computed AX property.
   */
  export interface AXValueSource {
    /**
     * What type of source this is.
     */
    type: AXValueSourceType;
    /**
     * The value of this property source.
     */
    value?: AXValue;
    /**
     * The name of the relevant attribute, if any.
     */
    attribute?: string;
    /**
     * The value of the relevant attribute, if any.
     */
    attributeValue?: AXValue;
    /**
     * Whether this source is superseded by a higher priority source.
     */
    superseded?: boolean;
    /**
     * The native markup source for this value, e.g. a <label> element.
     */
    nativeSource?: AXValueNativeSourceType;
    /**
     * The value, such as a node or node list, of the native source.
     */
    nativeSourceValue?: AXValue;
    /**
     * Whether the value for this property is invalid.
     */
    invalid?: boolean;
    /**
     * Reason for the value being invalid, if it is.
     */
    invalidReason?: string;
  }

  export interface AXRelatedNode {
    /**
     * The BackendNodeId of the related DOM node.
     */
    backendDOMNodeId: DOM.BackendNodeId;
    /**
     * The IDRef value provided, if any.
     */
    idref?: string;
    /**
     * The text alternative of this node in the current context.
     */
    text?: string;
  }

  export interface AXProperty {
    /**
     * The name of this property.
     */
    name: AXPropertyName;
    /**
     * The value of this property.
     */
    value: AXValue;
  }

  /**
   * A single computed AX property.
   */
  export interface AXValue {
    /**
     * The type of this value.
     */
    type: AXValueType;
    /**
     * The computed value of this property.
     */
    value?: any;
    /**
     * One or more related nodes, if applicable.
     */
    relatedNodes?: AXRelatedNode[];
    /**
     * The sources which contributed to the computation of this property.
     */
    sources?: AXValueSource[];
  }

  /**
   * Values of AXProperty name:
   * - from 'busy' to 'roledescription': states which apply to every AX node
   * - from 'live' to 'root': attributes which apply to nodes in live regions
   * - from 'autocomplete' to 'valuetext': attributes which apply to widgets
   * - from 'checked' to 'selected': states which apply to widgets
   * - from 'activedescendant' to 'owns' - relationships between elements other than parent/child/sibling.
   */
  export const enum AXPropertyName {
    Busy = 'busy',
    Disabled = 'disabled',
    Editable = 'editable',
    Focusable = 'focusable',
    Focused = 'focused',
    Hidden = 'hidden',
    HiddenRoot = 'hiddenRoot',
    Invalid = 'invalid',
    Keyshortcuts = 'keyshortcuts',
    Settable = 'settable',
    Roledescription = 'roledescription',
    Live = 'live',
    Atomic = 'atomic',
    Relevant = 'relevant',
    Root = 'root',
    Autocomplete = 'autocomplete',
    HasPopup = 'hasPopup',
    Level = 'level',
    Multiselectable = 'multiselectable',
    Orientation = 'orientation',
    Multiline = 'multiline',
    Readonly = 'readonly',
    Required = 'required',
    Valuemin = 'valuemin',
    Valuemax = 'valuemax',
    Valuetext = 'valuetext',
    Checked = 'checked',
    Expanded = 'expanded',
    Modal = 'modal',
    Pressed = 'pressed',
    Selected = 'selected',
    Activedescendant = 'activedescendant',
    Controls = 'controls',
    Describedby = 'describedby',
    Details = 'details',
    Errormessage = 'errormessage',
    Flowto = 'flowto',
    Labelledby = 'labelledby',
    Owns = 'owns',
  }

  /**
   * A node in the accessibility tree.
   */
  export interface AXNode {
    /**
     * Unique identifier for this node.
     */
    nodeId: AXNodeId;
    /**
     * Whether this node is ignored for accessibility
     */
    ignored: boolean;
    /**
     * Collection of reasons why this node is hidden.
     */
    ignoredReasons?: AXProperty[];
    /**
     * This `Node`'s role, whether explicit or implicit.
     */
    role?: AXValue;
    /**
     * This `Node`'s Chrome raw role.
     */
    chromeRole?: AXValue;
    /**
     * The accessible name for this `Node`.
     */
    name?: AXValue;
    /**
     * The accessible description for this `Node`.
     */
    description?: AXValue;
    /**
     * The value for this `Node`.
     */
    value?: AXValue;
    /**
     * All other properties
     */
    properties?: AXProperty[];
    /**
     * ID for this node's parent.
     */
    parentId?: AXNodeId;
    /**
     * IDs for each of this node's child nodes.
     */
    childIds?: AXNodeId[];
    /**
     * The backend ID for the associated DOM node, if any.
     */
    backendDOMNodeId?: DOM.BackendNodeId;
    /**
     * The frame ID for the frame associated with this nodes document.
     */
    frameId?: Page.FrameId;
  }

  export interface GetPartialAXTreeRequest {
    /**
     * Identifier of the node to get the partial accessibility tree for.
     */
    nodeId?: DOM.NodeId;
    /**
     * Identifier of the backend node to get the partial accessibility tree for.
     */
    backendNodeId?: DOM.BackendNodeId;
    /**
     * JavaScript object id of the node wrapper to get the partial accessibility tree for.
     */
    objectId?: Runtime.RemoteObjectId;
    /**
     * Whether to fetch this nodes ancestors, siblings and children. Defaults to true.
     */
    fetchRelatives?: boolean;
  }

  export interface GetPartialAXTreeResponse extends ProtocolResponseWithError {
    /**
     * The `Accessibility.AXNode` for this DOM node, if it exists, plus its ancestors, siblings and
     * children, if requested.
     */
    nodes: AXNode[];
  }

  export interface GetFullAXTreeRequest {
    /**
     * The maximum depth at which descendants of the root node should be retrieved.
     * If omitted, the full tree is returned.
     */
    depth?: integer;
    /**
     * The frame for whose document the AX tree should be retrieved.
     * If omited, the root frame is used.
     */
    frameId?: Page.FrameId;
  }

  export interface GetFullAXTreeResponse extends ProtocolResponseWithError {
    nodes: AXNode[];
  }

  export interface GetRootAXNodeRequest {
    /**
     * The frame in whose document the node resides.
     * If omitted, the root frame is used.
     */
    frameId?: Page.FrameId;
  }

  export interface GetRootAXNodeResponse extends ProtocolResponseWithError {
    node: AXNode;
  }

  export interface GetAXNodeAndAncestorsRequest {
    /**
     * Identifier of the node to get.
     */
    nodeId?: DOM.NodeId;
    /**
     * Identifier of the backend node to get.
     */
    backendNodeId?: DOM.BackendNodeId;
    /**
     * JavaScript object id of the node wrapper to get.
     */
    objectId?: Runtime.RemoteObjectId;
  }

  export interface GetAXNodeAndAncestorsResponse extends ProtocolResponseWithError {
    nodes: AXNode[];
  }

  export interface GetChildAXNodesRequest {
    id: AXNodeId;
    /**
     * The frame in whose document the node resides.
     * If omitted, the root frame is used.
     */
    frameId?: Page.FrameId;
  }

  export interface GetChildAXNodesResponse extends ProtocolResponseWithError {
    nodes: AXNode[];
  }

  export interface QueryAXTreeRequest {
    /**
     * Identifier of the node for the root to query.
     */
    nodeId?: DOM.NodeId;
    /**
     * Identifier of the backend node for the root to query.
     */
    backendNodeId?: DOM.BackendNodeId;
    /**
     * JavaScript object id of the node wrapper for the root to query.
     */
    objectId?: Runtime.RemoteObjectId;
    /**
     * Find nodes with this computed name.
     */
    accessibleName?: string;
    /**
     * Find nodes with this computed role.
     */
    role?: string;
  }

  export interface QueryAXTreeResponse extends ProtocolResponseWithError {
    /**
     * A list of `Accessibility.AXNode` matching the specified attributes,
     * including nodes that are ignored for accessibility.
     */
    nodes: AXNode[];
  }

  /**
   * The loadComplete event mirrors the load complete event sent by the browser to assistive
   * technology when the web page has finished loading.
   */
  export interface LoadCompleteEvent {
    /**
     * New document root node.
     */
    root: AXNode;
  }

  /**
   * The nodesUpdated event is sent every time a previously requested node has changed the in tree.
   */
  export interface NodesUpdatedEvent {
    /**
     * Updated node data.
     */
    nodes: AXNode[];
  }
}

export namespace Animation {

  export const enum AnimationType {
    CSSTransition = 'CSSTransition',
    CSSAnimation = 'CSSAnimation',
    WebAnimation = 'WebAnimation',
  }

  /**
   * Animation instance.
   */
  export interface Animation {
    /**
     * `Animation`'s id.
     */
    id: string;
    /**
     * `Animation`'s name.
     */
    name: string;
    /**
     * `Animation`'s internal paused state.
     */
    pausedState: boolean;
    /**
     * `Animation`'s play state.
     */
    playState: string;
    /**
     * `Animation`'s playback rate.
     */
    playbackRate: number;
    /**
     * `Animation`'s start time.
     */
    startTime: number;
    /**
     * `Animation`'s current time.
     */
    currentTime: number;
    /**
     * Animation type of `Animation`.
     */
    type: AnimationType;
    /**
     * `Animation`'s source animation node.
     */
    source?: AnimationEffect;
    /**
     * A unique ID for `Animation` representing the sources that triggered this CSS
     * animation/transition.
     */
    cssId?: string;
  }

  /**
   * AnimationEffect instance
   */
  export interface AnimationEffect {
    /**
     * `AnimationEffect`'s delay.
     */
    delay: number;
    /**
     * `AnimationEffect`'s end delay.
     */
    endDelay: number;
    /**
     * `AnimationEffect`'s iteration start.
     */
    iterationStart: number;
    /**
     * `AnimationEffect`'s iterations.
     */
    iterations: number;
    /**
     * `AnimationEffect`'s iteration duration.
     */
    duration: number;
    /**
     * `AnimationEffect`'s playback direction.
     */
    direction: string;
    /**
     * `AnimationEffect`'s fill mode.
     */
    fill: string;
    /**
     * `AnimationEffect`'s target node.
     */
    backendNodeId?: DOM.BackendNodeId;
    /**
     * `AnimationEffect`'s keyframes.
     */
    keyframesRule?: KeyframesRule;
    /**
     * `AnimationEffect`'s timing function.
     */
    easing: string;
  }

  /**
   * Keyframes Rule
   */
  export interface KeyframesRule {
    /**
     * CSS keyframed animation's name.
     */
    name?: string;
    /**
     * List of animation keyframes.
     */
    keyframes: KeyframeStyle[];
  }

  /**
   * Keyframe Style
   */
  export interface KeyframeStyle {
    /**
     * Keyframe's time offset.
     */
    offset: string;
    /**
     * `AnimationEffect`'s timing function.
     */
    easing: string;
  }

  export interface GetCurrentTimeRequest {
    /**
     * Id of animation.
     */
    id: string;
  }

  export interface GetCurrentTimeResponse extends ProtocolResponseWithError {
    /**
     * Current time of the page.
     */
    currentTime: number;
  }

  export interface GetPlaybackRateResponse extends ProtocolResponseWithError {
    /**
     * Playback rate for animations on page.
     */
    playbackRate: number;
  }

  export interface ReleaseAnimationsRequest {
    /**
     * List of animation ids to seek.
     */
    animations: string[];
  }

  export interface ResolveAnimationRequest {
    /**
     * Animation id.
     */
    animationId: string;
  }

  export interface ResolveAnimationResponse extends ProtocolResponseWithError {
    /**
     * Corresponding remote object.
     */
    remoteObject: Runtime.RemoteObject;
  }

  export interface SeekAnimationsRequest {
    /**
     * List of animation ids to seek.
     */
    animations: string[];
    /**
     * Set the current time of each animation.
     */
    currentTime: number;
  }

  export interface SetPausedRequest {
    /**
     * Animations to set the pause state of.
     */
    animations: string[];
    /**
     * Paused state to set to.
     */
    paused: boolean;
  }

  export interface SetPlaybackRateRequest {
    /**
     * Playback rate for animations on page
     */
    playbackRate: number;
  }

  export interface SetTimingRequest {
    /**
     * Animation id.
     */
    animationId: string;
    /**
     * Duration of the animation.
     */
    duration: number;
    /**
     * Delay of the animation.
     */
    delay: number;
  }

  /**
   * Event for when an animation has been cancelled.
   */
  export interface AnimationCanceledEvent {
    /**
     * Id of the animation that was cancelled.
     */
    id: string;
  }

  /**
   * Event for each animation that has been created.
   */
  export interface AnimationCreatedEvent {
    /**
     * Id of the animation that was created.
     */
    id: string;
  }

  /**
   * Event for animation that has been started.
   */
  export interface AnimationStartedEvent {
    /**
     * Animation that was started.
     */
    animation: Animation;
  }
}

/**
 * Audits domain allows investigation of page violations and possible improvements.
 */
export namespace Audits {

  /**
   * Information about a cookie that is affected by an inspector issue.
   */
  export interface AffectedCookie {
    /**
     * The following three properties uniquely identify a cookie
     */
    name: string;
    path: string;
    domain: string;
  }

  /**
   * Information about a request that is affected by an inspector issue.
   */
  export interface AffectedRequest {
    /**
     * The unique request id.
     */
    requestId: Network.RequestId;
    url?: string;
  }

  /**
   * Information about the frame affected by an inspector issue.
   */
  export interface AffectedFrame {
    frameId: Page.FrameId;
  }

  export const enum CookieExclusionReason {
    ExcludeSameSiteUnspecifiedTreatedAsLax = 'ExcludeSameSiteUnspecifiedTreatedAsLax',
    ExcludeSameSiteNoneInsecure = 'ExcludeSameSiteNoneInsecure',
    ExcludeSameSiteLax = 'ExcludeSameSiteLax',
    ExcludeSameSiteStrict = 'ExcludeSameSiteStrict',
    ExcludeInvalidSameParty = 'ExcludeInvalidSameParty',
    ExcludeSamePartyCrossPartyContext = 'ExcludeSamePartyCrossPartyContext',
  }

  export const enum CookieWarningReason {
    WarnSameSiteUnspecifiedCrossSiteContext = 'WarnSameSiteUnspecifiedCrossSiteContext',
    WarnSameSiteNoneInsecure = 'WarnSameSiteNoneInsecure',
    WarnSameSiteUnspecifiedLaxAllowUnsafe = 'WarnSameSiteUnspecifiedLaxAllowUnsafe',
    WarnSameSiteStrictLaxDowngradeStrict = 'WarnSameSiteStrictLaxDowngradeStrict',
    WarnSameSiteStrictCrossDowngradeStrict = 'WarnSameSiteStrictCrossDowngradeStrict',
    WarnSameSiteStrictCrossDowngradeLax = 'WarnSameSiteStrictCrossDowngradeLax',
    WarnSameSiteLaxCrossDowngradeStrict = 'WarnSameSiteLaxCrossDowngradeStrict',
    WarnSameSiteLaxCrossDowngradeLax = 'WarnSameSiteLaxCrossDowngradeLax',
    WarnAttributeValueExceedsMaxSize = 'WarnAttributeValueExceedsMaxSize',
  }

  export const enum CookieOperation {
    SetCookie = 'SetCookie',
    ReadCookie = 'ReadCookie',
  }

  /**
   * This information is currently necessary, as the front-end has a difficult
   * time finding a specific cookie. With this, we can convey specific error
   * information without the cookie.
   */
  export interface CookieIssueDetails {
    /**
     * If AffectedCookie is not set then rawCookieLine contains the raw
     * Set-Cookie header string. This hints at a problem where the
     * cookie line is syntactically or semantically malformed in a way
     * that no valid cookie could be created.
     */
    cookie?: AffectedCookie;
    rawCookieLine?: string;
    cookieWarningReasons: CookieWarningReason[];
    cookieExclusionReasons: CookieExclusionReason[];
    /**
     * Optionally identifies the site-for-cookies and the cookie url, which
     * may be used by the front-end as additional context.
     */
    operation: CookieOperation;
    siteForCookies?: string;
    cookieUrl?: string;
    request?: AffectedRequest;
  }

  export const enum MixedContentResolutionStatus {
    MixedContentBlocked = 'MixedContentBlocked',
    MixedContentAutomaticallyUpgraded = 'MixedContentAutomaticallyUpgraded',
    MixedContentWarning = 'MixedContentWarning',
  }

  export const enum MixedContentResourceType {
    AttributionSrc = 'AttributionSrc',
    Audio = 'Audio',
    Beacon = 'Beacon',
    CSPReport = 'CSPReport',
    Download = 'Download',
    EventSource = 'EventSource',
    Favicon = 'Favicon',
    Font = 'Font',
    Form = 'Form',
    Frame = 'Frame',
    Image = 'Image',
    Import = 'Import',
    Manifest = 'Manifest',
    Ping = 'Ping',
    PluginData = 'PluginData',
    PluginResource = 'PluginResource',
    Prefetch = 'Prefetch',
    Resource = 'Resource',
    Script = 'Script',
    ServiceWorker = 'ServiceWorker',
    SharedWorker = 'SharedWorker',
    Stylesheet = 'Stylesheet',
    Track = 'Track',
    Video = 'Video',
    Worker = 'Worker',
    XMLHttpRequest = 'XMLHttpRequest',
    XSLT = 'XSLT',
  }

  export interface MixedContentIssueDetails {
    /**
     * The type of resource causing the mixed content issue (css, js, iframe,
     * form,...). Marked as optional because it is mapped to from
     * blink::mojom::RequestContextType, which will be replaced
     * by network::mojom::RequestDestination
     */
    resourceType?: MixedContentResourceType;
    /**
     * The way the mixed content issue is being resolved.
     */
    resolutionStatus: MixedContentResolutionStatus;
    /**
     * The unsafe http url causing the mixed content issue.
     */
    insecureURL: string;
    /**
     * The url responsible for the call to an unsafe url.
     */
    mainResourceURL: string;
    /**
     * The mixed content request.
     * Does not always exist (e.g. for unsafe form submission urls).
     */
    request?: AffectedRequest;
    /**
     * Optional because not every mixed content issue is necessarily linked to a frame.
     */
    frame?: AffectedFrame;
  }

  /**
   * Enum indicating the reason a response has been blocked. These reasons are
   * refinements of the net error BLOCKED_BY_RESPONSE.
   */
  export const enum BlockedByResponseReason {
    CoepFrameResourceNeedsCoepHeader = 'CoepFrameResourceNeedsCoepHeader',
    CoopSandboxedIFrameCannotNavigateToCoopPage = 'CoopSandboxedIFrameCannotNavigateToCoopPage',
    CorpNotSameOrigin = 'CorpNotSameOrigin',
    CorpNotSameOriginAfterDefaultedToSameOriginByCoep = 'CorpNotSameOriginAfterDefaultedToSameOriginByCoep',
    CorpNotSameSite = 'CorpNotSameSite',
  }

  /**
   * Details for a request that has been blocked with the BLOCKED_BY_RESPONSE
   * code. Currently only used for COEP/COOP, but may be extended to include
   * some CSP errors in the future.
   */
  export interface BlockedByResponseIssueDetails {
    request: AffectedRequest;
    parentFrame?: AffectedFrame;
    blockedFrame?: AffectedFrame;
    reason: BlockedByResponseReason;
  }

  export const enum HeavyAdResolutionStatus {
    HeavyAdBlocked = 'HeavyAdBlocked',
    HeavyAdWarning = 'HeavyAdWarning',
  }

  export const enum HeavyAdReason {
    NetworkTotalLimit = 'NetworkTotalLimit',
    CpuTotalLimit = 'CpuTotalLimit',
    CpuPeakLimit = 'CpuPeakLimit',
  }

  export interface HeavyAdIssueDetails {
    /**
     * The resolution status, either blocking the content or warning.
     */
    resolution: HeavyAdResolutionStatus;
    /**
     * The reason the ad was blocked, total network or cpu or peak cpu.
     */
    reason: HeavyAdReason;
    /**
     * The frame that was blocked.
     */
    frame: AffectedFrame;
  }

  export const enum ContentSecurityPolicyViolationType {
    KInlineViolation = 'kInlineViolation',
    KEvalViolation = 'kEvalViolation',
    KURLViolation = 'kURLViolation',
    KTrustedTypesSinkViolation = 'kTrustedTypesSinkViolation',
    KTrustedTypesPolicyViolation = 'kTrustedTypesPolicyViolation',
    KWasmEvalViolation = 'kWasmEvalViolation',
  }

  export interface SourceCodeLocation {
    scriptId?: Runtime.ScriptId;
    url: string;
    lineNumber: integer;
    columnNumber: integer;
  }

  export interface ContentSecurityPolicyIssueDetails {
    /**
     * The url not included in allowed sources.
     */
    blockedURL?: string;
    /**
     * Specific directive that is violated, causing the CSP issue.
     */
    violatedDirective: string;
    isReportOnly: boolean;
    contentSecurityPolicyViolationType: ContentSecurityPolicyViolationType;
    frameAncestor?: AffectedFrame;
    sourceCodeLocation?: SourceCodeLocation;
    violatingNodeId?: DOM.BackendNodeId;
  }

  export const enum SharedArrayBufferIssueType {
    TransferIssue = 'TransferIssue',
    CreationIssue = 'CreationIssue',
  }

  /**
   * Details for a issue arising from an SAB being instantiated in, or
   * transferred to a context that is not cross-origin isolated.
   */
  export interface SharedArrayBufferIssueDetails {
    sourceCodeLocation: SourceCodeLocation;
    isWarning: boolean;
    type: SharedArrayBufferIssueType;
  }

  export const enum TwaQualityEnforcementViolationType {
    KHttpError = 'kHttpError',
    KUnavailableOffline = 'kUnavailableOffline',
    KDigitalAssetLinks = 'kDigitalAssetLinks',
  }

  export interface TrustedWebActivityIssueDetails {
    /**
     * The url that triggers the violation.
     */
    url: string;
    violationType: TwaQualityEnforcementViolationType;
    httpStatusCode?: integer;
    /**
     * The package name of the Trusted Web Activity client app. This field is
     * only used when violation type is kDigitalAssetLinks.
     */
    packageName?: string;
    /**
     * The signature of the Trusted Web Activity client app. This field is only
     * used when violation type is kDigitalAssetLinks.
     */
    signature?: string;
  }

  export interface LowTextContrastIssueDetails {
    violatingNodeId: DOM.BackendNodeId;
    violatingNodeSelector: string;
    contrastRatio: number;
    thresholdAA: number;
    thresholdAAA: number;
    fontSize: string;
    fontWeight: string;
  }

  /**
   * Details for a CORS related issue, e.g. a warning or error related to
   * CORS RFC1918 enforcement.
   */
  export interface CorsIssueDetails {
    corsErrorStatus: Network.CorsErrorStatus;
    isWarning: boolean;
    request: AffectedRequest;
    location?: SourceCodeLocation;
    initiatorOrigin?: string;
    resourceIPAddressSpace?: Network.IPAddressSpace;
    clientSecurityState?: Network.ClientSecurityState;
  }

  export const enum AttributionReportingIssueType {
    PermissionPolicyDisabled = 'PermissionPolicyDisabled',
    UntrustworthyReportingOrigin = 'UntrustworthyReportingOrigin',
    InsecureContext = 'InsecureContext',
    InvalidHeader = 'InvalidHeader',
    InvalidRegisterTriggerHeader = 'InvalidRegisterTriggerHeader',
    InvalidEligibleHeader = 'InvalidEligibleHeader',
    TooManyConcurrentRequests = 'TooManyConcurrentRequests',
  }

  /**
   * Details for issues around "Attribution Reporting API" usage.
   * Explainer: https://github.com/WICG/attribution-reporting-api
   */
  export interface AttributionReportingIssueDetails {
    violationType: AttributionReportingIssueType;
    request?: AffectedRequest;
    violatingNodeId?: DOM.BackendNodeId;
    invalidParameter?: string;
  }

  /**
   * Details for issues about documents in Quirks Mode
   * or Limited Quirks Mode that affects page layouting.
   */
  export interface QuirksModeIssueDetails {
    /**
     * If false, it means the document's mode is "quirks"
     * instead of "limited-quirks".
     */
    isLimitedQuirksMode: boolean;
    documentNodeId: DOM.BackendNodeId;
    url: string;
    frameId: Page.FrameId;
    loaderId: Network.LoaderId;
  }

  export interface NavigatorUserAgentIssueDetails {
    url: string;
    location?: SourceCodeLocation;
  }

  export const enum GenericIssueErrorType {
    CrossOriginPortalPostMessageError = 'CrossOriginPortalPostMessageError',
  }

  /**
   * Depending on the concrete errorType, different properties are set.
   */
  export interface GenericIssueDetails {
    /**
     * Issues with the same errorType are aggregated in the frontend.
     */
    errorType: GenericIssueErrorType;
    frameId?: Page.FrameId;
  }

  export const enum DeprecationIssueType {
    AuthorizationCoveredByWildcard = 'AuthorizationCoveredByWildcard',
    CanRequestURLHTTPContainingNewline = 'CanRequestURLHTTPContainingNewline',
    ChromeLoadTimesConnectionInfo = 'ChromeLoadTimesConnectionInfo',
    ChromeLoadTimesFirstPaintAfterLoadTime = 'ChromeLoadTimesFirstPaintAfterLoadTime',
    ChromeLoadTimesWasAlternateProtocolAvailable = 'ChromeLoadTimesWasAlternateProtocolAvailable',
    CookieWithTruncatingChar = 'CookieWithTruncatingChar',
    CrossOriginAccessBasedOnDocumentDomain = 'CrossOriginAccessBasedOnDocumentDomain',
    CrossOriginWindowAlert = 'CrossOriginWindowAlert',
    CrossOriginWindowConfirm = 'CrossOriginWindowConfirm',
    CSSSelectorInternalMediaControlsOverlayCastButton = 'CSSSelectorInternalMediaControlsOverlayCastButton',
    DeprecationExample = 'DeprecationExample',
    DocumentDomainSettingWithoutOriginAgentClusterHeader = 'DocumentDomainSettingWithoutOriginAgentClusterHeader',
    EventPath = 'EventPath',
    ExpectCTHeader = 'ExpectCTHeader',
    GeolocationInsecureOrigin = 'GeolocationInsecureOrigin',
    GeolocationInsecureOriginDeprecatedNotRemoved = 'GeolocationInsecureOriginDeprecatedNotRemoved',
    GetUserMediaInsecureOrigin = 'GetUserMediaInsecureOrigin',
    HostCandidateAttributeGetter = 'HostCandidateAttributeGetter',
    IdentityInCanMakePaymentEvent = 'IdentityInCanMakePaymentEvent',
    InsecurePrivateNetworkSubresourceRequest = 'InsecurePrivateNetworkSubresourceRequest',
    LegacyConstraintGoogIPv6 = 'LegacyConstraintGoogIPv6',
    LocalCSSFileExtensionRejected = 'LocalCSSFileExtensionRejected',
    MediaSourceAbortRemove = 'MediaSourceAbortRemove',
    MediaSourceDurationTruncatingBuffered = 'MediaSourceDurationTruncatingBuffered',
    NavigateEventRestoreScroll = 'NavigateEventRestoreScroll',
    NavigateEventTransitionWhile = 'NavigateEventTransitionWhile',
    NoSysexWebMIDIWithoutPermission = 'NoSysexWebMIDIWithoutPermission',
    NotificationInsecureOrigin = 'NotificationInsecureOrigin',
    NotificationPermissionRequestedIframe = 'NotificationPermissionRequestedIframe',
    ObsoleteWebRtcCipherSuite = 'ObsoleteWebRtcCipherSuite',
    OpenWebDatabaseInsecureContext = 'OpenWebDatabaseInsecureContext',
    OverflowVisibleOnReplacedElement = 'OverflowVisibleOnReplacedElement',
    PersistentQuotaType = 'PersistentQuotaType',
    PictureSourceSrc = 'PictureSourceSrc',
    PrefixedCancelAnimationFrame = 'PrefixedCancelAnimationFrame',
    PrefixedRequestAnimationFrame = 'PrefixedRequestAnimationFrame',
    PrefixedStorageInfo = 'PrefixedStorageInfo',
    PrefixedVideoDisplayingFullscreen = 'PrefixedVideoDisplayingFullscreen',
    PrefixedVideoEnterFullscreen = 'PrefixedVideoEnterFullscreen',
    PrefixedVideoEnterFullScreen = 'PrefixedVideoEnterFullScreen',
    PrefixedVideoExitFullscreen = 'PrefixedVideoExitFullscreen',
    PrefixedVideoExitFullScreen = 'PrefixedVideoExitFullScreen',
    PrefixedVideoSupportsFullscreen = 'PrefixedVideoSupportsFullscreen',
    RangeExpand = 'RangeExpand',
    RequestedSubresourceWithEmbeddedCredentials = 'RequestedSubresourceWithEmbeddedCredentials',
    RTCConstraintEnableDtlsSrtpFalse = 'RTCConstraintEnableDtlsSrtpFalse',
    RTCConstraintEnableDtlsSrtpTrue = 'RTCConstraintEnableDtlsSrtpTrue',
    RTCPeerConnectionComplexPlanBSdpUsingDefaultSdpSemantics = 'RTCPeerConnectionComplexPlanBSdpUsingDefaultSdpSemantics',
    RTCPeerConnectionSdpSemanticsPlanB = 'RTCPeerConnectionSdpSemanticsPlanB',
    RtcpMuxPolicyNegotiate = 'RtcpMuxPolicyNegotiate',
    SharedArrayBufferConstructedWithoutIsolation = 'SharedArrayBufferConstructedWithoutIsolation',
    TextToSpeech_DisallowedByAutoplay = 'TextToSpeech_DisallowedByAutoplay',
    V8SharedArrayBufferConstructedInExtensionWithoutIsolation = 'V8SharedArrayBufferConstructedInExtensionWithoutIsolation',
    XHRJSONEncodingDetection = 'XHRJSONEncodingDetection',
    XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload = 'XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload',
    XRSupportsSession = 'XRSupportsSession',
  }

  /**
   * This issue tracks information needed to print a deprecation message.
   * https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/frame/third_party/blink/renderer/core/frame/deprecation/README.md
   */
  export interface DeprecationIssueDetails {
    affectedFrame?: AffectedFrame;
    sourceCodeLocation: SourceCodeLocation;
    type: DeprecationIssueType;
  }

  export const enum ClientHintIssueReason {
    MetaTagAllowListInvalidOrigin = 'MetaTagAllowListInvalidOrigin',
    MetaTagModifiedHTML = 'MetaTagModifiedHTML',
  }

  export interface FederatedAuthRequestIssueDetails {
    federatedAuthRequestIssueReason: FederatedAuthRequestIssueReason;
  }

  /**
   * Represents the failure reason when a federated authentication reason fails.
   * Should be updated alongside RequestIdTokenStatus in
   * third_party/blink/public/mojom/devtools/inspector_issue.mojom to include
   * all cases except for success.
   */
  export const enum FederatedAuthRequestIssueReason {
    ApprovalDeclined = 'ApprovalDeclined',
    TooManyRequests = 'TooManyRequests',
    ManifestListHttpNotFound = 'ManifestListHttpNotFound',
    ManifestListNoResponse = 'ManifestListNoResponse',
    ManifestListInvalidResponse = 'ManifestListInvalidResponse',
    ManifestNotInManifestList = 'ManifestNotInManifestList',
    ManifestListTooBig = 'ManifestListTooBig',
    ManifestHttpNotFound = 'ManifestHttpNotFound',
    ManifestNoResponse = 'ManifestNoResponse',
    ManifestInvalidResponse = 'ManifestInvalidResponse',
    ClientMetadataHttpNotFound = 'ClientMetadataHttpNotFound',
    ClientMetadataNoResponse = 'ClientMetadataNoResponse',
    ClientMetadataInvalidResponse = 'ClientMetadataInvalidResponse',
    ClientMetadataMissingPrivacyPolicyUrl = 'ClientMetadataMissingPrivacyPolicyUrl',
    DisabledInSettings = 'DisabledInSettings',
    ErrorFetchingSignin = 'ErrorFetchingSignin',
    InvalidSigninResponse = 'InvalidSigninResponse',
    AccountsHttpNotFound = 'AccountsHttpNotFound',
    AccountsNoResponse = 'AccountsNoResponse',
    AccountsInvalidResponse = 'AccountsInvalidResponse',
    IdTokenHttpNotFound = 'IdTokenHttpNotFound',
    IdTokenNoResponse = 'IdTokenNoResponse',
    IdTokenInvalidResponse = 'IdTokenInvalidResponse',
    IdTokenInvalidRequest = 'IdTokenInvalidRequest',
    ErrorIdToken = 'ErrorIdToken',
    Canceled = 'Canceled',
  }

  /**
   * This issue tracks client hints related issues. It's used to deprecate old
   * features, encourage the use of new ones, and provide general guidance.
   */
  export interface ClientHintIssueDetails {
    sourceCodeLocation: SourceCodeLocation;
    clientHintIssueReason: ClientHintIssueReason;
  }

  /**
   * A unique identifier for the type of issue. Each type may use one of the
   * optional fields in InspectorIssueDetails to convey more specific
   * information about the kind of issue.
   */
  export const enum InspectorIssueCode {
    CookieIssue = 'CookieIssue',
    MixedContentIssue = 'MixedContentIssue',
    BlockedByResponseIssue = 'BlockedByResponseIssue',
    HeavyAdIssue = 'HeavyAdIssue',
    ContentSecurityPolicyIssue = 'ContentSecurityPolicyIssue',
    SharedArrayBufferIssue = 'SharedArrayBufferIssue',
    TrustedWebActivityIssue = 'TrustedWebActivityIssue',
    LowTextContrastIssue = 'LowTextContrastIssue',
    CorsIssue = 'CorsIssue',
    AttributionReportingIssue = 'AttributionReportingIssue',
    QuirksModeIssue = 'QuirksModeIssue',
    NavigatorUserAgentIssue = 'NavigatorUserAgentIssue',
    GenericIssue = 'GenericIssue',
    DeprecationIssue = 'DeprecationIssue',
    ClientHintIssue = 'ClientHintIssue',
    FederatedAuthRequestIssue = 'FederatedAuthRequestIssue',
  }

  /**
   * This struct holds a list of optional fields with additional information
   * specific to the kind of issue. When adding a new issue code, please also
   * add a new optional field to this type.
   */
  export interface InspectorIssueDetails {
    cookieIssueDetails?: CookieIssueDetails;
    mixedContentIssueDetails?: MixedContentIssueDetails;
    blockedByResponseIssueDetails?: BlockedByResponseIssueDetails;
    heavyAdIssueDetails?: HeavyAdIssueDetails;
    contentSecurityPolicyIssueDetails?: ContentSecurityPolicyIssueDetails;
    sharedArrayBufferIssueDetails?: SharedArrayBufferIssueDetails;
    twaQualityEnforcementDetails?: TrustedWebActivityIssueDetails;
    lowTextContrastIssueDetails?: LowTextContrastIssueDetails;
    corsIssueDetails?: CorsIssueDetails;
    attributionReportingIssueDetails?: AttributionReportingIssueDetails;
    quirksModeIssueDetails?: QuirksModeIssueDetails;
    navigatorUserAgentIssueDetails?: NavigatorUserAgentIssueDetails;
    genericIssueDetails?: GenericIssueDetails;
    deprecationIssueDetails?: DeprecationIssueDetails;
    clientHintIssueDetails?: ClientHintIssueDetails;
    federatedAuthRequestIssueDetails?: FederatedAuthRequestIssueDetails;
  }

  /**
   * A unique id for a DevTools inspector issue. Allows other entities (e.g.
   * exceptions, CDP message, console messages, etc.) to reference an issue.
   */
  export type IssueId = OpaqueIdentifier<string, 'Protocol.Audits.IssueId'>;

  /**
   * An inspector issue reported from the back-end.
   */
  export interface InspectorIssue {
    code: InspectorIssueCode;
    details: InspectorIssueDetails;
    /**
     * A unique id for this issue. May be omitted if no other entity (e.g.
     * exception, CDP message, etc.) is referencing this issue.
     */
    issueId?: IssueId;
  }

  export const enum GetEncodedResponseRequestEncoding {
    Webp = 'webp',
    Jpeg = 'jpeg',
    Png = 'png',
  }

  export interface GetEncodedResponseRequest {
    /**
     * Identifier of the network request to get content for.
     */
    requestId: Network.RequestId;
    /**
     * The encoding to use.
     */
    encoding: GetEncodedResponseRequestEncoding;
    /**
     * The quality of the encoding (0-1). (defaults to 1)
     */
    quality?: number;
    /**
     * Whether to only return the size information (defaults to false).
     */
    sizeOnly?: boolean;
  }

  export interface GetEncodedResponseResponse extends ProtocolResponseWithError {
    /**
     * The encoded body as a base64 string. Omitted if sizeOnly is true.
     */
    body?: binary;
    /**
     * Size before re-encoding.
     */
    originalSize: integer;
    /**
     * Size after re-encoding.
     */
    encodedSize: integer;
  }

  export interface CheckContrastRequest {
    /**
     * Whether to report WCAG AAA level issues. Default is false.
     */
    reportAAA?: boolean;
  }

  export interface IssueAddedEvent {
    issue: InspectorIssue;
  }
}

/**
 * Defines events for background web platform features.
 */
export namespace BackgroundService {

  /**
   * The Background Service that will be associated with the commands/events.
   * Every Background Service operates independently, but they share the same
   * API.
   */
  export const enum ServiceName {
    BackgroundFetch = 'backgroundFetch',
    BackgroundSync = 'backgroundSync',
    PushMessaging = 'pushMessaging',
    Notifications = 'notifications',
    PaymentHandler = 'paymentHandler',
    PeriodicBackgroundSync = 'periodicBackgroundSync',
  }

  /**
   * A key-value pair for additional event information to pass along.
   */
  export interface EventMetadata {
    key: string;
    value: string;
  }

  export interface BackgroundServiceEvent {
    /**
     * Timestamp of the event (in seconds).
     */
    timestamp: Network.TimeSinceEpoch;
    /**
     * The origin this event belongs to.
     */
    origin: string;
    /**
     * The Service Worker ID that initiated the event.
     */
    serviceWorkerRegistrationId: ServiceWorker.RegistrationID;
    /**
     * The Background Service this event belongs to.
     */
    service: ServiceName;
    /**
     * A description of the event.
     */
    eventName: string;
    /**
     * An identifier that groups related events together.
     */
    instanceId: string;
    /**
     * A list of event-specific information.
     */
    eventMetadata: EventMetadata[];
  }

  export interface StartObservingRequest {
    service: ServiceName;
  }

  export interface StopObservingRequest {
    service: ServiceName;
  }

  export interface SetRecordingRequest {
    shouldRecord: boolean;
    service: ServiceName;
  }

  export interface ClearEventsRequest {
    service: ServiceName;
  }

  /**
   * Called when the recording state for the service has been updated.
   */
  export interface RecordingStateChangedEvent {
    isRecording: boolean;
    service: ServiceName;
  }

  /**
   * Called with all existing backgroundServiceEvents when enabled, and all new
   * events afterwards if enabled and recording.
   */
  export interface BackgroundServiceEventReceivedEvent {
    backgroundServiceEvent: BackgroundServiceEvent;
  }
}

/**
 * The Browser domain defines methods and events for browser managing.
 */
export namespace Browser {

  export type BrowserContextID = OpaqueIdentifier<string, 'Protocol.Browser.BrowserContextID'>;

  export type WindowID = OpaqueIdentifier<integer, 'Protocol.Browser.WindowID'>;

  /**
   * The state of the browser window.
   */
  export const enum WindowState {
    Normal = 'normal',
    Minimized = 'minimized',
    Maximized = 'maximized',
    Fullscreen = 'fullscreen',
  }

  /**
   * Browser window bounds information
   */
  export interface Bounds {
    /**
     * The offset from the left edge of the screen to the window in pixels.
     */
    left?: integer;
    /**
     * The offset from the top edge of the screen to the window in pixels.
     */
    top?: integer;
    /**
     * The window width in pixels.
     */
    width?: integer;
    /**
     * The window height in pixels.
     */
    height?: integer;
    /**
     * The window state. Default to normal.
     */
    windowState?: WindowState;
  }

  export const enum PermissionType {
    AccessibilityEvents = 'accessibilityEvents',
    AudioCapture = 'audioCapture',
    BackgroundSync = 'backgroundSync',
    BackgroundFetch = 'backgroundFetch',
    ClipboardReadWrite = 'clipboardReadWrite',
    ClipboardSanitizedWrite = 'clipboardSanitizedWrite',
    DisplayCapture = 'displayCapture',
    DurableStorage = 'durableStorage',
    Flash = 'flash',
    Geolocation = 'geolocation',
    Midi = 'midi',
    MidiSysex = 'midiSysex',
    Nfc = 'nfc',
    Notifications = 'notifications',
    PaymentHandler = 'paymentHandler',
    PeriodicBackgroundSync = 'periodicBackgroundSync',
    ProtectedMediaIdentifier = 'protectedMediaIdentifier',
    Sensors = 'sensors',
    VideoCapture = 'videoCapture',
    VideoCapturePanTiltZoom = 'videoCapturePanTiltZoom',
    IdleDetection = 'idleDetection',
    WakeLockScreen = 'wakeLockScreen',
    WakeLockSystem = 'wakeLockSystem',
  }

  export const enum PermissionSetting {
    Granted = 'granted',
    Denied = 'denied',
    Prompt = 'prompt',
  }

  /**
   * Definition of PermissionDescriptor defined in the Permissions API:
   * https://w3c.github.io/permissions/#dictdef-permissiondescriptor.
   */
  export interface PermissionDescriptor {
    /**
     * Name of permission.
     * See https://cs.chromium.org/chromium/src/third_party/blink/renderer/modules/permissions/permission_descriptor.idl for valid permission names.
     */
    name: string;
    /**
     * For "midi" permission, may also specify sysex control.
     */
    sysex?: boolean;
    /**
     * For "push" permission, may specify userVisibleOnly.
     * Note that userVisibleOnly = true is the only currently supported type.
     */
    userVisibleOnly?: boolean;
    /**
     * For "clipboard" permission, may specify allowWithoutSanitization.
     */
    allowWithoutSanitization?: boolean;
    /**
     * For "camera" permission, may specify panTiltZoom.
     */
    panTiltZoom?: boolean;
  }

  /**
   * Browser command ids used by executeBrowserCommand.
   */
  export const enum BrowserCommandId {
    OpenTabSearch = 'openTabSearch',
    CloseTabSearch = 'closeTabSearch',
  }

  /**
   * Chrome histogram bucket.
   */
  export interface Bucket {
    /**
     * Minimum value (inclusive).
     */
    low: integer;
    /**
     * Maximum value (exclusive).
     */
    high: integer;
    /**
     * Number of samples.
     */
    count: integer;
  }

  /**
   * Chrome histogram.
   */
  export interface Histogram {
    /**
     * Name.
     */
    name: string;
    /**
     * Sum of sample values.
     */
    sum: integer;
    /**
     * Total number of samples.
     */
    count: integer;
    /**
     * Buckets.
     */
    buckets: Bucket[];
  }

  export interface SetPermissionRequest {
    /**
     * Descriptor of permission to override.
     */
    permission: PermissionDescriptor;
    /**
     * Setting of the permission.
     */
    setting: PermissionSetting;
    /**
     * Origin the permission applies to, all origins if not specified.
     */
    origin?: string;
    /**
     * Context to override. When omitted, default browser context is used.
     */
    browserContextId?: BrowserContextID;
  }

  export interface GrantPermissionsRequest {
    permissions: PermissionType[];
    /**
     * Origin the permission applies to, all origins if not specified.
     */
    origin?: string;
    /**
     * BrowserContext to override permissions. When omitted, default browser context is used.
     */
    browserContextId?: BrowserContextID;
  }

  export interface ResetPermissionsRequest {
    /**
     * BrowserContext to reset permissions. When omitted, default browser context is used.
     */
    browserContextId?: BrowserContextID;
  }

  export const enum SetDownloadBehaviorRequestBehavior {
    Deny = 'deny',
    Allow = 'allow',
    AllowAndName = 'allowAndName',
    Default = 'default',
  }

  export interface SetDownloadBehaviorRequest {
    /**
     * Whether to allow all or deny all download requests, or use default Chrome behavior if
     * available (otherwise deny). |allowAndName| allows download and names files according to
     * their dowmload guids.
     */
    behavior: SetDownloadBehaviorRequestBehavior;
    /**
     * BrowserContext to set download behavior. When omitted, default browser context is used.
     */
    browserContextId?: BrowserContextID;
    /**
     * The default path to save downloaded files to. This is required if behavior is set to 'allow'
     * or 'allowAndName'.
     */
    downloadPath?: string;
    /**
     * Whether to emit download events (defaults to false).
     */
    eventsEnabled?: boolean;
  }

  export interface CancelDownloadRequest {
    /**
     * Global unique identifier of the download.
     */
    guid: string;
    /**
     * BrowserContext to perform the action in. When omitted, default browser context is used.
     */
    browserContextId?: BrowserContextID;
  }

  export interface GetVersionResponse extends ProtocolResponseWithError {
    /**
     * Protocol version.
     */
    protocolVersion: string;
    /**
     * Product name.
     */
    product: string;
    /**
     * Product revision.
     */
    revision: string;
    /**
     * User-Agent.
     */
    userAgent: string;
    /**
     * V8 version.
     */
    jsVersion: string;
  }

  export interface GetBrowserCommandLineResponse extends ProtocolResponseWithError {
    /**
     * Commandline parameters
     */
    arguments: string[];
  }

  export interface GetHistogramsRequest {
    /**
     * Requested substring in name. Only histograms which have query as a
     * substring in their name are extracted. An empty or absent query returns
     * all histograms.
     */
    query?: string;
    /**
     * If true, retrieve delta since last call.
     */
    delta?: boolean;
  }

  export interface GetHistogramsResponse extends ProtocolResponseWithError {
    /**
     * Histograms.
     */
    histograms: Histogram[];
  }

  export interface GetHistogramRequest {
    /**
     * Requested histogram name.
     */
    name: string;
    /**
     * If true, retrieve delta since last call.
     */
    delta?: boolean;
  }

  export interface GetHistogramResponse extends ProtocolResponseWithError {
    /**
     * Histogram.
     */
    histogram: Histogram;
  }

  export interface GetWindowBoundsRequest {
    /**
     * Browser window id.
     */
    windowId: WindowID;
  }

  export interface GetWindowBoundsResponse extends ProtocolResponseWithError {
    /**
     * Bounds information of the window. When window state is 'minimized', the restored window
     * position and size are returned.
     */
    bounds: Bounds;
  }

  export interface GetWindowForTargetRequest {
    /**
     * Devtools agent host id. If called as a part of the session, associated targetId is used.
     */
    targetId?: Target.TargetID;
  }

  export interface GetWindowForTargetResponse extends ProtocolResponseWithError {
    /**
     * Browser window id.
     */
    windowId: WindowID;
    /**
     * Bounds information of the window. When window state is 'minimized', the restored window
     * position and size are returned.
     */
    bounds: Bounds;
  }

  export interface SetWindowBoundsRequest {
    /**
     * Browser window id.
     */
    windowId: WindowID;
    /**
     * New window bounds. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
     * with 'left', 'top', 'width' or 'height'. Leaves unspecified fields unchanged.
     */
    bounds: Bounds;
  }

  export interface SetDockTileRequest {
    badgeLabel?: string;
    /**
     * Png encoded image.
     */
    image?: binary;
  }

  export interface ExecuteBrowserCommandRequest {
    commandId: BrowserCommandId;
  }

  /**
   * Fired when page is about to start a download.
   */
  export interface DownloadWillBeginEvent {
    /**
     * Id of the frame that caused the download to begin.
     */
    frameId: Page.FrameId;
    /**
     * Global unique identifier of the download.
     */
    guid: string;
    /**
     * URL of the resource being downloaded.
     */
    url: string;
    /**
     * Suggested file name of the resource (the actual name of the file saved on disk may differ).
     */
    suggestedFilename: string;
  }

  export const enum DownloadProgressEventState {
    InProgress = 'inProgress',
    Completed = 'completed',
    Canceled = 'canceled',
  }

  /**
   * Fired when download makes progress. Last call has |done| == true.
   */
  export interface DownloadProgressEvent {
    /**
     * Global unique identifier of the download.
     */
    guid: string;
    /**
     * Total expected bytes to download.
     */
    totalBytes: number;
    /**
     * Total bytes received.
     */
    receivedBytes: number;
    /**
     * Download status.
     */
    state: DownloadProgressEventState;
  }
}

/**
 * This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles)
 * have an associated `id` used in subsequent operations on the related object. Each object type has
 * a specific `id` structure, and those are not interchangeable between objects of different kinds.
 * CSS objects can be loaded using the `get*ForNode()` calls (which accept a DOM node id). A client
 * can also keep track of stylesheets via the `styleSheetAdded`/`styleSheetRemoved` events and
 * subsequently load the required stylesheet contents using the `getStyleSheet[Text]()` methods.
 */
export namespace CSS {

  export type StyleSheetId = OpaqueIdentifier<string, 'Protocol.CSS.StyleSheetId'>;

  /**
   * Stylesheet type: "injected" for stylesheets injected via extension, "user-agent" for user-agent
   * stylesheets, "inspector" for stylesheets created by the inspector (i.e. those holding the "via
   * inspector" rules), "regular" for regular stylesheets.
   */
  export const enum StyleSheetOrigin {
    Injected = 'injected',
    UserAgent = 'user-agent',
    Inspector = 'inspector',
    Regular = 'regular',
  }

  /**
   * CSS rule collection for a single pseudo style.
   */
  export interface PseudoElementMatches {
    /**
     * Pseudo element type.
     */
    pseudoType: DOM.PseudoType;
    /**
     * Pseudo element custom ident.
     */
    pseudoIdentifier?: string;
    /**
     * Matches of CSS rules applicable to the pseudo style.
     */
    matches: RuleMatch[];
  }

  /**
   * Inherited CSS rule collection from ancestor node.
   */
  export interface InheritedStyleEntry {
    /**
     * The ancestor node's inline style, if any, in the style inheritance chain.
     */
    inlineStyle?: CSSStyle;
    /**
     * Matches of CSS rules matching the ancestor node in the style inheritance chain.
     */
    matchedCSSRules: RuleMatch[];
  }

  /**
   * Inherited pseudo element matches from pseudos of an ancestor node.
   */
  export interface InheritedPseudoElementMatches {
    /**
     * Matches of pseudo styles from the pseudos of an ancestor node.
     */
    pseudoElements: PseudoElementMatches[];
  }

  /**
   * Match data for a CSS rule.
   */
  export interface RuleMatch {
    /**
     * CSS rule in the match.
     */
    rule: CSSRule;
    /**
     * Matching selector indices in the rule's selectorList selectors (0-based).
     */
    matchingSelectors: integer[];
  }

  /**
   * Data for a simple selector (these are delimited by commas in a selector list).
   */
  export interface Value {
    /**
     * Value text.
     */
    text: string;
    /**
     * Value range in the underlying resource (if available).
     */
    range?: SourceRange;
  }

  /**
   * Selector list data.
   */
  export interface SelectorList {
    /**
     * Selectors in the list.
     */
    selectors: Value[];
    /**
     * Rule selector text.
     */
    text: string;
  }

  /**
   * CSS stylesheet metainformation.
   */
  export interface CSSStyleSheetHeader {
    /**
     * The stylesheet identifier.
     */
    styleSheetId: StyleSheetId;
    /**
     * Owner frame identifier.
     */
    frameId: Page.FrameId;
    /**
     * Stylesheet resource URL. Empty if this is a constructed stylesheet created using
     * new CSSStyleSheet() (but non-empty if this is a constructed sylesheet imported
     * as a CSS module script).
     */
    sourceURL: string;
    /**
     * URL of source map associated with the stylesheet (if any).
     */
    sourceMapURL?: string;
    /**
     * Stylesheet origin.
     */
    origin: StyleSheetOrigin;
    /**
     * Stylesheet title.
     */
    title: string;
    /**
     * The backend id for the owner node of the stylesheet.
     */
    ownerNode?: DOM.BackendNodeId;
    /**
     * Denotes whether the stylesheet is disabled.
     */
    disabled: boolean;
    /**
     * Whether the sourceURL field value comes from the sourceURL comment.
     */
    hasSourceURL?: boolean;
    /**
     * Whether this stylesheet is created for STYLE tag by parser. This flag is not set for
     * document.written STYLE tags.
     */
    isInline: boolean;
    /**
     * Whether this stylesheet is mutable. Inline stylesheets become mutable
     * after they have been modified via CSSOM API.
     * <link> element's stylesheets become mutable only if DevTools modifies them.
     * Constructed stylesheets (new CSSStyleSheet()) are mutable immediately after creation.
     */
    isMutable: boolean;
    /**
     * True if this stylesheet is created through new CSSStyleSheet() or imported as a
     * CSS module script.
     */
    isConstructed: boolean;
    /**
     * Line offset of the stylesheet within the resource (zero based).
     */
    startLine: number;
    /**
     * Column offset of the stylesheet within the resource (zero based).
     */
    startColumn: number;
    /**
     * Size of the content (in characters).
     */
    length: number;
    /**
     * Line offset of the end of the stylesheet within the resource (zero based).
     */
    endLine: number;
    /**
     * Column offset of the end of the stylesheet within the resource (zero based).
     */
    endColumn: number;
  }

  /**
   * CSS rule representation.
   */
  export interface CSSRule {
    /**
     * The css style sheet identifier (absent for user agent stylesheet and user-specified
     * stylesheet rules) this rule came from.
     */
    styleSheetId?: StyleSheetId;
    /**
     * Rule selector data.
     */
    selectorList: SelectorList;
    /**
     * Parent stylesheet's origin.
     */
    origin: StyleSheetOrigin;
    /**
     * Associated style declaration.
     */
    style: CSSStyle;
    /**
     * Media list array (for rules involving media queries). The array enumerates media queries
     * starting with the innermost one, going outwards.
     */
    media?: CSSMedia[];
    /**
     * Container query list array (for rules involving container queries).
     * The array enumerates container queries starting with the innermost one, going outwards.
     */
    containerQueries?: CSSContainerQuery[];
    /**
     * @supports CSS at-rule array.
     * The array enumerates @supports at-rules starting with the innermost one, going outwards.
     */
    supports?: CSSSupports[];
    /**
     * Cascade layer array. Contains the layer hierarchy that this rule belongs to starting
     * with the innermost layer and going outwards.
     */
    layers?: CSSLayer[];
    /**
     * @scope CSS at-rule array.
     * The array enumerates @scope at-rules starting with the innermost one, going outwards.
     */
    scopes?: CSSScope[];
  }

  /**
   * CSS coverage information.
   */
  export interface RuleUsage {
    /**
     * The css style sheet identifier (absent for user agent stylesheet and user-specified
     * stylesheet rules) this rule came from.
     */
    styleSheetId: StyleSheetId;
    /**
     * Offset of the start of the rule (including selector) from the beginning of the stylesheet.
     */
    startOffset: number;
    /**
     * Offset of the end of the rule body from the beginning of the stylesheet.
     */
    endOffset: number;
    /**
     * Indicates whether the rule was actually used by some element in the page.
     */
    used: boolean;
  }

  /**
   * Text range within a resource. All numbers are zero-based.
   */
  export interface SourceRange {
    /**
     * Start line of range.
     */
    startLine: integer;
    /**
     * Start column of range (inclusive).
     */
    startColumn: integer;
    /**
     * End line of range
     */
    endLine: integer;
    /**
     * End column of range (exclusive).
     */
    endColumn: integer;
  }

  export interface ShorthandEntry {
    /**
     * Shorthand name.
     */
    name: string;
    /**
     * Shorthand value.
     */
    value: string;
    /**
     * Whether the property has "!important" annotation (implies `false` if absent).
     */
    important?: boolean;
  }

  export interface CSSComputedStyleProperty {
    /**
     * Computed style property name.
     */
    name: string;
    /**
     * Computed style property value.
     */
    value: string;
  }

  /**
   * CSS style representation.
   */
  export interface CSSStyle {
    /**
     * The css style sheet identifier (absent for user agent stylesheet and user-specified
     * stylesheet rules) this rule came from.
     */
    styleSheetId?: StyleSheetId;
    /**
     * CSS properties in the style.
     */
    cssProperties: CSSProperty[];
    /**
     * Computed values for all shorthands found in the style.
     */
    shorthandEntries: ShorthandEntry[];
    /**
     * Style declaration text (if available).
     */
    cssText?: string;
    /**
     * Style declaration range in the enclosing stylesheet (if available).
     */
    range?: SourceRange;
  }

  /**
   * CSS property declaration data.
   */
  export interface CSSProperty {
    /**
     * The property name.
     */
    name: string;
    /**
     * The property value.
     */
    value: string;
    /**
     * Whether the property has "!important" annotation (implies `false` if absent).
     */
    important?: boolean;
    /**
     * Whether the property is implicit (implies `false` if absent).
     */
    implicit?: boolean;
    /**
     * The full property text as specified in the style.
     */
    text?: string;
    /**
     * Whether the property is understood by the browser (implies `true` if absent).
     */
    parsedOk?: boolean;
    /**
     * Whether the property is disabled by the user (present for source-based properties only).
     */
    disabled?: boolean;
    /**
     * The entire property range in the enclosing style declaration (if available).
     */
    range?: SourceRange;
  }

  export const enum CSSMediaSource {
    MediaRule = 'mediaRule',
    ImportRule = 'importRule',
    LinkedSheet = 'linkedSheet',
    InlineSheet = 'inlineSheet',
  }

  /**
   * CSS media rule descriptor.
   */
  export interface CSSMedia {
    /**
     * Media query text.
     */
    text: string;
    /**
     * Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if
     * specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked
     * stylesheet's LINK tag, "inlineSheet" if specified by a "media" attribute in an inline
     * stylesheet's STYLE tag.
     */
    source: CSSMediaSource;
    /**
     * URL of the document containing the media query description.
     */
    sourceURL?: string;
    /**
     * The associated rule (@media or @import) header range in the enclosing stylesheet (if
     * available).
     */
    range?: SourceRange;
    /**
     * Identifier of the stylesheet containing this object (if exists).
     */
    styleSheetId?: StyleSheetId;
    /**
     * Array of media queries.
     */
    mediaList?: MediaQuery[];
  }

  /**
   * Media query descriptor.
   */
  export interface MediaQuery {
    /**
     * Array of media query expressions.
     */
    expressions: MediaQueryExpression[];
    /**
     * Whether the media query condition is satisfied.
     */
    active: boolean;
  }

  /**
   * Media query expression descriptor.
   */
  export interface MediaQueryExpression {
    /**
     * Media query expression value.
     */
    value: number;
    /**
     * Media query expression units.
     */
    unit: string;
    /**
     * Media query expression feature.
     */
    feature: string;
    /**
     * The associated range of the value text in the enclosing stylesheet (if available).
     */
    valueRange?: SourceRange;
    /**
     * Computed length of media query expression (if applicable).
     */
    computedLength?: number;
  }

  /**
   * CSS container query rule descriptor.
   */
  export interface CSSContainerQuery {
    /**
     * Container query text.
     */
    text: string;
    /**
     * The associated rule header range in the enclosing stylesheet (if
     * available).
     */
    range?: SourceRange;
    /**
     * Identifier of the stylesheet containing this object (if exists).
     */
    styleSheetId?: StyleSheetId;
    /**
     * Optional name for the container.
     */
    name?: string;
  }

  /**
   * CSS Supports at-rule descriptor.
   */
  export interface CSSSupports {
    /**
     * Supports rule text.
     */
    text: string;
    /**
     * Whether the supports condition is satisfied.
     */
    active: boolean;
    /**
     * The associated rule header range in the enclosing stylesheet (if
     * available).
     */
    range?: SourceRange;
    /**
     * Identifier of the stylesheet containing this object (if exists).
     */
    styleSheetId?: StyleSheetId;
  }

  /**
   * CSS Scope at-rule descriptor.
   */
  export interface CSSScope {
    /**
     * Scope rule text.
     */
    text: string;
    /**
     * The associated rule header range in the enclosing stylesheet (if
     * available).
     */
    range?: SourceRange;
    /**
     * Identifier of the stylesheet containing this object (if exists).
     */
    styleSheetId?: StyleSheetId;
  }

  /**
   * CSS Layer at-rule descriptor.
   */
  export interface CSSLayer {
    /**
     * Layer name.
     */
    text: string;
    /**
     * The associated rule header range in the enclosing stylesheet (if
     * available).
     */
    range?: SourceRange;
    /**
     * Identifier of the stylesheet containing this object (if exists).
     */
    styleSheetId?: StyleSheetId;
  }

  /**
   * CSS Layer data.
   */
  export interface CSSLayerData {
    /**
     * Layer name.
     */
    name: string;
    /**
     * Direct sub-layers
     */
    subLayers?: CSSLayerData[];
    /**
     * Layer order. The order determines the order of the layer in the cascade order.
     * A higher number has higher priority in the cascade order.
     */
    order: number;
  }

  /**
   * Information about amount of glyphs that were rendered with given font.
   */
  export interface PlatformFontUsage {
    /**
     * Font's family name reported by platform.
     */
    familyName: string;
    /**
     * Indicates if the font was downloaded or resolved locally.
     */
    isCustomFont: boolean;
    /**
     * Amount of glyphs that were rendered with this font.
     */
    glyphCount: number;
  }

  /**
   * Information about font variation axes for variable fonts
   */
  export interface FontVariationAxis {
    /**
     * The font-variation-setting tag (a.k.a. "axis tag").
     */
    tag: string;
    /**
     * Human-readable variation name in the default language (normally, "en").
     */
    name: string;
    /**
     * The minimum value (inclusive) the font supports for this tag.
     */
    minValue: number;
    /**
     * The maximum value (inclusive) the font supports for this tag.
     */
    maxValue: number;
    /**
     * The default value.
     */
    defaultValue: number;
  }

  /**
   * Properties of a web font: https://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#font-descriptions
   * and additional information such as platformFontFamily and fontVariationAxes.
   */
  export interface FontFace {
    /**
     * The font-family.
     */
    fontFamily: string;
    /**
     * The font-style.
     */
    fontStyle: string;
    /**
     * The font-variant.
     */
    fontVariant: string;
    /**
     * The font-weight.
     */
    fontWeight: string;
    /**
     * The font-stretch.
     */
    fontStretch: string;
    /**
     * The font-display.
     */
    fontDisplay: string;
    /**
     * The unicode-range.
     */
    unicodeRange: string;
    /**
     * The src.
     */
    src: string;
    /**
     * The resolved platform font family
     */
    platformFontFamily: string;
    /**
     * Available variation settings (a.k.a. "axes").
     */
    fontVariationAxes?: FontVariationAxis[];
  }

  /**
   * CSS keyframes rule representation.
   */
  export interface CSSKeyframesRule {
    /**
     * Animation name.
     */
    animationName: Value;
    /**
     * List of keyframes.
     */
    keyframes: CSSKeyframeRule[];
  }

  /**
   * CSS keyframe rule representation.
   */
  export interface CSSKeyframeRule {
    /**
     * The css style sheet identifier (absent for user agent stylesheet and user-specified
     * stylesheet rules) this rule came from.
     */
    styleSheetId?: StyleSheetId;
    /**
     * Parent stylesheet's origin.
     */
    origin: StyleSheetOrigin;
    /**
     * Associated key text.
     */
    keyText: Value;
    /**
     * Associated style declaration.
     */
    style: CSSStyle;
  }

  /**
   * A descriptor of operation to mutate style declaration text.
   */
  export interface StyleDeclarationEdit {
    /**
     * The css style sheet identifier.
     */
    styleSheetId: StyleSheetId;
    /**
     * The range of the style text in the enclosing stylesheet.
     */
    range: SourceRange;
    /**
     * New style text.
     */
    text: string;
  }

  export interface AddRuleRequest {
    /**
     * The css style sheet identifier where a new rule should be inserted.
     */
    styleSheetId: StyleSheetId;
    /**
     * The text of a new rule.
     */
    ruleText: string;
    /**
     * Text position of a new rule in the target style sheet.
     */
    location: SourceRange;
  }

  export interface AddRuleResponse extends ProtocolResponseWithError {
    /**
     * The newly created rule.
     */
    rule: CSSRule;
  }

  export interface CollectClassNamesRequest {
    styleSheetId: StyleSheetId;
  }

  export interface CollectClassNamesResponse extends ProtocolResponseWithError {
    /**
     * Class name list.
     */
    classNames: string[];
  }

  export interface CreateStyleSheetRequest {
    /**
     * Identifier of the frame where "via-inspector" stylesheet should be created.
     */
    frameId: Page.FrameId;
  }

  export interface CreateStyleSheetResponse extends ProtocolResponseWithError {
    /**
     * Identifier of the created "via-inspector" stylesheet.
     */
    styleSheetId: StyleSheetId;
  }

  export interface ForcePseudoStateRequest {
    /**
     * The element id for which to force the pseudo state.
     */
    nodeId: DOM.NodeId;
    /**
     * Element pseudo classes to force when computing the element's style.
     */
    forcedPseudoClasses: string[];
  }

  export interface GetBackgroundColorsRequest {
    /**
     * Id of the node to get background colors for.
     */
    nodeId: DOM.NodeId;
  }

  export interface GetBackgroundColorsResponse extends ProtocolResponseWithError {
    /**
     * The range of background colors behind this element, if it contains any visible text. If no
     * visible text is present, this will be undefined. In the case of a flat background color,
     * this will consist of simply that color. In the case of a gradient, this will consist of each
     * of the color stops. For anything more complicated, this will be an empty array. Images will
     * be ignored (as if the image had failed to load).
     */
    backgroundColors?: string[];
    /**
     * The computed font size for this node, as a CSS computed value string (e.g. '12px').
     */
    computedFontSize?: string;
    /**
     * The computed font weight for this node, as a CSS computed value string (e.g. 'normal' or
     * '100').
     */
    computedFontWeight?: string;
  }

  export interface GetComputedStyleForNodeRequest {
    nodeId: DOM.NodeId;
  }

  export interface GetComputedStyleForNodeResponse extends ProtocolResponseWithError {
    /**
     * Computed style for the specified DOM node.
     */
    computedStyle: CSSComputedStyleProperty[];
  }

  export interface GetInlineStylesForNodeRequest {
    nodeId: DOM.NodeId;
  }

  export interface GetInlineStylesForNodeResponse extends ProtocolResponseWithError {
    /**
     * Inline style for the specified DOM node.
     */
    inlineStyle?: CSSStyle;
    /**
     * Attribute-defined element style (e.g. resulting from "width=20 height=100%").
     */
    attributesStyle?: CSSStyle;
  }

  export interface GetMatchedStylesForNodeRequest {
    nodeId: DOM.NodeId;
  }

  export interface GetMatchedStylesForNodeResponse extends ProtocolResponseWithError {
    /**
     * Inline style for the specified DOM node.
     */
    inlineStyle?: CSSStyle;
    /**
     * Attribute-defined element style (e.g. resulting from "width=20 height=100%").
     */
    attributesStyle?: CSSStyle;
    /**
     * CSS rules matching this node, from all applicable stylesheets.
     */
    matchedCSSRules?: RuleMatch[];
    /**
     * Pseudo style matches for this node.
     */
    pseudoElements?: PseudoElementMatches[];
    /**
     * A chain of inherited styles (from the immediate node parent up to the DOM tree root).
     */
    inherited?: InheritedStyleEntry[];
    /**
     * A chain of inherited pseudo element styles (from the immediate node parent up to the DOM tree root).
     */
    inheritedPseudoElements?: InheritedPseudoElementMatches[];
    /**
     * A list of CSS keyframed animations matching this node.
     */
    cssKeyframesRules?: CSSKeyframesRule[];
    /**
     * Id of the first parent element that does not have display: contents.
     */
    parentLayoutNodeId?: DOM.NodeId;
  }

  export interface GetMediaQueriesResponse extends ProtocolResponseWithError {
    medias: CSSMedia[];
  }

  export interface GetPlatformFontsForNodeRequest {
    nodeId: DOM.NodeId;
  }

  export interface GetPlatformFontsForNodeResponse extends ProtocolResponseWithError {
    /**
     * Usage statistics for every employed platform font.
     */
    fonts: PlatformFontUsage[];
  }

  export interface GetStyleSheetTextRequest {
    styleSheetId: StyleSheetId;
  }

  export interface GetStyleSheetTextResponse extends ProtocolResponseWithError {
    /**
     * The stylesheet text.
     */
    text: string;
  }

  export interface GetLayersForNodeRequest {
    nodeId: DOM.NodeId;
  }

  export interface GetLayersForNodeResponse extends ProtocolResponseWithError {
    rootLayer: CSSLayerData;
  }

  export interface TrackComputedStyleUpdatesRequest {
    propertiesToTrack: CSSComputedStyleProperty[];
  }

  export interface TakeComputedStyleUpdatesResponse extends ProtocolResponseWithError {
    /**
     * The list of node Ids that have their tracked computed styles updated
     */
    nodeIds: DOM.NodeId[];
  }

  export interface SetEffectivePropertyValueForNodeRequest {
    /**
     * The element id for which to set property.
     */
    nodeId: DOM.NodeId;
    propertyName: string;
    value: string;
  }

  export interface SetKeyframeKeyRequest {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    keyText: string;
  }

  export interface SetKeyframeKeyResponse extends ProtocolResponseWithError {
    /**
     * The resulting key text after modification.
     */
    keyText: Value;
  }

  export interface SetMediaTextRequest {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    text: string;
  }

  export interface SetMediaTextResponse extends ProtocolResponseWithError {
    /**
     * The resulting CSS media rule after modification.
     */
    media: CSSMedia;
  }

  export interface SetContainerQueryTextRequest {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    text: string;
  }

  export interface SetContainerQueryTextResponse extends ProtocolResponseWithError {
    /**
     * The resulting CSS container query rule after modification.
     */
    containerQuery: CSSContainerQuery;
  }

  export interface SetSupportsTextRequest {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    text: string;
  }

  export interface SetSupportsTextResponse extends ProtocolResponseWithError {
    /**
     * The resulting CSS Supports rule after modification.
     */
    supports: CSSSupports;
  }

  export interface SetScopeTextRequest {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    text: string;
  }

  export interface SetScopeTextResponse extends ProtocolResponseWithError {
    /**
     * The resulting CSS Scope rule after modification.
     */
    scope: CSSScope;
  }

  export interface SetRuleSelectorRequest {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    selector: string;
  }

  export interface SetRuleSelectorResponse extends ProtocolResponseWithError {
    /**
     * The resulting selector list after modification.
     */
    selectorList: SelectorList;
  }

  export interface SetStyleSheetTextRequest {
    styleSheetId: StyleSheetId;
    text: string;
  }

  export interface SetStyleSheetTextResponse extends ProtocolResponseWithError {
    /**
     * URL of source map associated with script (if any).
     */
    sourceMapURL?: string;
  }

  export interface SetStyleTextsRequest {
    edits: StyleDeclarationEdit[];
  }

  export interface SetStyleTextsResponse extends ProtocolResponseWithError {
    /**
     * The resulting styles after modification.
     */
    styles: CSSStyle[];
  }

  export interface StopRuleUsageTrackingResponse extends ProtocolResponseWithError {
    ruleUsage: RuleUsage[];
  }

  export interface TakeCoverageDeltaResponse extends ProtocolResponseWithError {
    coverage: RuleUsage[];
    /**
     * Monotonically increasing time, in seconds.
     */
    timestamp: number;
  }

  export interface SetLocalFontsEnabledRequest {
    /**
     * Whether rendering of local fonts is enabled.
     */
    enabled: boolean;
  }

  /**
   * Fires whenever a web font is updated.  A non-empty font parameter indicates a successfully loaded
   * web font
   */
  export interface FontsUpdatedEvent {
    /**
     * The web font that has loaded.
     */
    font?: FontFace;
  }

  /**
   * Fired whenever an active document stylesheet is added.
   */
  export interface StyleSheetAddedEvent {
    /**
     * Added stylesheet metainfo.
     */
    header: CSSStyleSheetHeader;
  }

  /**
   * Fired whenever a stylesheet is changed as a result of the client operation.
   */
  export interface StyleSheetChangedEvent {
    styleSheetId: StyleSheetId;
  }

  /**
   * Fired whenever an active document stylesheet is removed.
   */
  export interface StyleSheetRemovedEvent {
    /**
     * Identifier of the removed stylesheet.
     */
    styleSheetId: StyleSheetId;
  }
}

export namespace CacheStorage {

  /**
   * Unique identifier of the Cache object.
   */
  export type CacheId = OpaqueIdentifier<string, 'Protocol.CacheStorage.CacheId'>;

  /**
   * type of HTTP response cached
   */
  export const enum CachedResponseType {
    Basic = 'basic',
    Cors = 'cors',
    Default = 'default',
    Error = 'error',
    OpaqueResponse = 'opaqueResponse',
    OpaqueRedirect = 'opaqueRedirect',
  }

  /**
   * Data entry.
   */
  export interface DataEntry {
    /**
     * Request URL.
     */
    requestURL: string;
    /**
     * Request method.
     */
    requestMethod: string;
    /**
     * Request headers
     */
    requestHeaders: Header[];
    /**
     * Number of seconds since epoch.
     */
    responseTime: number;
    /**
     * HTTP response status code.
     */
    responseStatus: integer;
    /**
     * HTTP response status text.
     */
    responseStatusText: string;
    /**
     * HTTP response type
     */
    responseType: CachedResponseType;
    /**
     * Response headers
     */
    responseHeaders: Header[];
  }

  /**
   * Cache identifier.
   */
  export interface Cache {
    /**
     * An opaque unique id of the cache.
     */
    cacheId: CacheId;
    /**
     * Security origin of the cache.
     */
    securityOrigin: string;
    /**
     * The name of the cache.
     */
    cacheName: string;
  }

  export interface Header {
    name: string;
    value: string;
  }

  /**
   * Cached response
   */
  export interface CachedResponse {
    /**
     * Entry content, base64-encoded.
     */
    body: binary;
  }

  export interface DeleteCacheRequest {
    /**
     * Id of cache for deletion.
     */
    cacheId: CacheId;
  }

  export interface DeleteEntryRequest {
    /**
     * Id of cache where the entry will be deleted.
     */
    cacheId: CacheId;
    /**
     * URL spec of the request.
     */
    request: string;
  }

  export interface RequestCacheNamesRequest {
    /**
     * Security origin.
     */
    securityOrigin: string;
  }

  export interface RequestCacheNamesResponse extends ProtocolResponseWithError {
    /**
     * Caches for the security origin.
     */
    caches: Cache[];
  }

  export interface RequestCachedResponseRequest {
    /**
     * Id of cache that contains the entry.
     */
    cacheId: CacheId;
    /**
     * URL spec of the request.
     */
    requestURL: string;
    /**
     * headers of the request.
     */
    requestHeaders: Header[];
  }

  export interface RequestCachedResponseResponse extends ProtocolResponseWithError {
    /**
     * Response read from the cache.
     */
    response: CachedResponse;
  }

  export interface RequestEntriesRequest {
    /**
     * ID of cache to get entries from.
     */
    cacheId: CacheId;
    /**
     * Number of records to skip.
     */
    skipCount?: integer;
    /**
     * Number of records to fetch.
     */
    pageSize?: integer;
    /**
     * If present, only return the entries containing this substring in the path
     */
    pathFilter?: string;
  }

  export interface RequestEntriesResponse extends ProtocolResponseWithError {
    /**
     * Array of object store data entries.
     */
    cacheDataEntries: DataEntry[];
    /**
     * Count of returned entries from this storage. If pathFilter is empty, it
     * is the count of all entries from this storage.
     */
    returnCount: number;
  }
}

/**
 * A domain for interacting with Cast, Presentation API, and Remote Playback API
 * functionalities.
 */
export namespace Cast {

  export interface Sink {
    name: string;
    id: string;
    /**
     * Text describing the current session. Present only if there is an active
     * session on the sink.
     */
    session?: string;
  }

  export interface EnableRequest {
    presentationUrl?: string;
  }

  export interface SetSinkToUseRequest {
    sinkName: string;
  }

  export interface StartDesktopMirroringRequest {
    sinkName: string;
  }

  export interface StartTabMirroringRequest {
    sinkName: string;
  }

  export interface StopCastingRequest {
    sinkName: string;
  }

  /**
   * This is fired whenever the list of available sinks changes. A sink is a
   * device or a software surface that you can cast to.
   */
  export interface SinksUpdatedEvent {
    sinks: Sink[];
  }

  /**
   * This is fired whenever the outstanding issue/error message changes.
   * |issueMessage| is empty if there is no issue.
   */
  export interface IssueUpdatedEvent {
    issueMessage: string;
  }
}

/**
 * This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object
 * that has an `id`. This `id` can be used to get additional information on the Node, resolve it into
 * the JavaScript object wrapper, etc. It is important that client receives DOM events only for the
 * nodes that are known to the client. Backend keeps track of the nodes that were sent to the client
 * and never sends the same node twice. It is client's responsibility to collect information about
 * the nodes that were sent to the client.<p>Note that `iframe` owner elements will return
 * corresponding document elements as their child nodes.</p>
 */
export namespace DOM {

  /**
   * Unique DOM node identifier.
   */
  export type NodeId = OpaqueIdentifier<integer, 'Protocol.DOM.NodeId'>;

  /**
   * Unique DOM node identifier used to reference a node that may not have been pushed to the
   * front-end.
   */
  export type BackendNodeId = OpaqueIdentifier<integer, 'Protocol.DOM.BackendNodeId'>;

  /**
   * Backend node with a friendly name.
   */
  export interface BackendNode {
    /**
     * `Node`'s nodeType.
     */
    nodeType: integer;
    /**
     * `Node`'s nodeName.
     */
    nodeName: string;
    backendNodeId: BackendNodeId;
  }

  /**
   * Pseudo element type.
   */
  export const enum PseudoType {
    FirstLine = 'first-line',
    FirstLetter = 'first-letter',
    Before = 'before',
    After = 'after',
    Marker = 'marker',
    Backdrop = 'backdrop',
    Selection = 'selection',
    TargetText = 'target-text',
    SpellingError = 'spelling-error',
    GrammarError = 'grammar-error',
    Highlight = 'highlight',
    FirstLineInherited = 'first-line-inherited',
    Scrollbar = 'scrollbar',
    ScrollbarThumb = 'scrollbar-thumb',
    ScrollbarButton = 'scrollbar-button',
    ScrollbarTrack = 'scrollbar-track',
    ScrollbarTrackPiece = 'scrollbar-track-piece',
    ScrollbarCorner = 'scrollbar-corner',
    Resizer = 'resizer',
    InputListButton = 'input-list-button',
    PageTransition = 'page-transition',
    PageTransitionContainer = 'page-transition-container',
    PageTransitionImageWrapper = 'page-transition-image-wrapper',
    PageTransitionOutgoingImage = 'page-transition-outgoing-image',
    PageTransitionIncomingImage = 'page-transition-incoming-image',
  }

  /**
   * Shadow root type.
   */
  export const enum ShadowRootType {
    UserAgent = 'user-agent',
    Open = 'open',
    Closed = 'closed',
  }

  /**
   * Document compatibility mode.
   */
  export const enum CompatibilityMode {
    QuirksMode = 'QuirksMode',
    LimitedQuirksMode = 'LimitedQuirksMode',
    NoQuirksMode = 'NoQuirksMode',
  }

  /**
   * DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes.
   * DOMNode is a base node mirror type.
   */
  export interface Node {
    /**
     * Node identifier that is passed into the rest of the DOM messages as the `nodeId`. Backend
     * will only push node with given `id` once. It is aware of all requested nodes and will only
     * fire DOM events for nodes known to the client.
     */
    nodeId: NodeId;
    /**
     * The id of the parent node if any.
     */
    parentId?: NodeId;
    /**
     * The BackendNodeId for this node.
     */
    backendNodeId: BackendNodeId;
    /**
     * `Node`'s nodeType.
     */
    nodeType: integer;
    /**
     * `Node`'s nodeName.
     */
    nodeName: string;
    /**
     * `Node`'s localName.
     */
    localName: string;
    /**
     * `Node`'s nodeValue.
     */
    nodeValue: string;
    /**
     * Child count for `Container` nodes.
     */
    childNodeCount?: integer;
    /**
     * Child nodes of this node when requested with children.
     */
    children?: Node[];
    /**
     * Attributes of the `Element` node in the form of flat array `[name1, value1, name2, value2]`.
     */
    attributes?: string[];
    /**
     * Document URL that `Document` or `FrameOwner` node points to.
     */
    documentURL?: string;
    /**
     * Base URL that `Document` or `FrameOwner` node uses for URL completion.
     */
    baseURL?: string;
    /**
     * `DocumentType`'s publicId.
     */
    publicId?: string;
    /**
     * `DocumentType`'s systemId.
     */
    systemId?: string;
    /**
     * `DocumentType`'s internalSubset.
     */
    internalSubset?: string;
    /**
     * `Document`'s XML version in case of XML documents.
     */
    xmlVersion?: string;
    /**
     * `Attr`'s name.
     */
    name?: string;
    /**
     * `Attr`'s value.
     */
    value?: string;
    /**
     * Pseudo element type for this node.
     */
    pseudoType?: PseudoType;
    /**
     * Pseudo element identifier for this node. Only present if there is a
     * valid pseudoType.
     */
    pseudoIdentifier?: string;
    /**
     * Shadow root type.
     */
    shadowRootType?: ShadowRootType;
    /**
     * Frame ID for frame owner elements.
     */
    frameId?: Page.FrameId;
    /**
     * Content document for frame owner elements.
     */
    contentDocument?: Node;
    /**
     * Shadow root list for given element host.
     */
    shadowRoots?: Node[];
    /**
     * Content document fragment for template elements.
     */
    templateContent?: Node;
    /**
     * Pseudo elements associated with this node.
     */
    pseudoElements?: Node[];
    /**
     * Deprecated, as the HTML Imports API has been removed (crbug.com/937746).
     * This property used to return the imported document for the HTMLImport links.
     * The property is always undefined now.
     */
    importedDocument?: Node;
    /**
     * Distributed nodes for given insertion point.
     */
    distributedNodes?: BackendNode[];
    /**
     * Whether the node is SVG.
     */
    isSVG?: boolean;
    compatibilityMode?: CompatibilityMode;
    assignedSlot?: BackendNode;
  }

  /**
   * A structure holding an RGBA color.
   */
  export interface RGBA {
    /**
     * The red component, in the [0-255] range.
     */
    r: integer;
    /**
     * The green component, in the [0-255] range.
     */
    g: integer;
    /**
     * The blue component, in the [0-255] range.
     */
    b: integer;
    /**
     * The alpha component, in the [0-1] range (default: 1).
     */
    a?: number;
  }

  /**
   * An array of quad vertices, x immediately followed by y for each point, points clock-wise.
   */
  export type Quad = number[];

  /**
   * Box model.
   */
  export interface BoxModel {
    /**
     * Content box
     */
    content: Quad;
    /**
     * Padding box
     */
    padding: Quad;
    /**
     * Border box
     */
    border: Quad;
    /**
     * Margin box
     */
    margin: Quad;
    /**
     * Node width
     */
    width: integer;
    /**
     * Node height
     */
    height: integer;
    /**
     * Shape outside coordinates
     */
    shapeOutside?: ShapeOutsideInfo;
  }

  /**
   * CSS Shape Outside details.
   */
  export interface ShapeOutsideInfo {
    /**
     * Shape bounds
     */
    bounds: Quad;
    /**
     * Shape coordinate details
     */
    shape: any[];
    /**
     * Margin shape bounds
     */
    marginShape: any[];
  }

  /**
   * Rectangle.
   */
  export interface Rect {
    /**
     * X coordinate
     */
    x: number;
    /**
     * Y coordinate
     */
    y: number;
    /**
     * Rectangle width
     */
    width: number;
    /**
     * Rectangle height
     */
    height: number;
  }

  export interface CSSComputedStyleProperty {
    /**
     * Computed style property name.
     */
    name: string;
    /**
     * Computed style property value.
     */
    value: string;
  }

  export interface CollectClassNamesFromSubtreeRequest {
    /**
     * Id of the node to collect class names.
     */
    nodeId: NodeId;
  }

  export interface CollectClassNamesFromSubtreeResponse extends ProtocolResponseWithError {
    /**
     * Class name list.
     */
    classNames: string[];
  }

  export interface CopyToRequest {
    /**
     * Id of the node to copy.
     */
    nodeId: NodeId;
    /**
     * Id of the element to drop the copy into.
     */
    targetNodeId: NodeId;
    /**
     * Drop the copy before this node (if absent, the copy becomes the last child of
     * `targetNodeId`).
     */
    insertBeforeNodeId?: NodeId;
  }

  export interface CopyToResponse extends ProtocolResponseWithError {
    /**
     * Id of the node clone.
     */
    nodeId: NodeId;
  }

  export interface DescribeNodeRequest {
    /**
     * Identifier of the node.
     */
    nodeId?: NodeId;
    /**
     * Identifier of the backend node.
     */
    backendNodeId?: BackendNodeId;
    /**
     * JavaScript object id of the node wrapper.
     */
    objectId?: Runtime.RemoteObjectId;
    /**
     * The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
     * entire subtree or provide an integer larger than 0.
     */
    depth?: integer;
    /**
     * Whether or not iframes and shadow roots should be traversed when returning the subtree
     * (default is false).
     */
    pierce?: boolean;
  }

  export interface DescribeNodeResponse extends ProtocolResponseWithError {
    /**
     * Node description.
     */
    node: Node;
  }

  export interface ScrollIntoViewIfNeededRequest {
    /**
     * Identifier of the node.
     */
    nodeId?: NodeId;
    /**
     * Identifier of the backend node.
     */
    backendNodeId?: BackendNodeId;
    /**
     * JavaScript object id of the node wrapper.
     */
    objectId?: Runtime.RemoteObjectId;
    /**
     * The rect to be scrolled into view, relative to the node's border box, in CSS pixels.
     * When omitted, center of the node will be used, similar to Element.scrollIntoView.
     */
    rect?: Rect;
  }

  export interface DiscardSearchResultsRequest {
    /**
     * Unique search session identifier.
     */
    searchId: string;
  }

  export const enum EnableRequestIncludeWhitespace {
    None = 'none',
    All = 'all',
  }

  export interface EnableRequest {
    /**
     * Whether to include whitespaces in the children array of returned Nodes.
     */
    includeWhitespace?: EnableRequestIncludeWhitespace;
  }

  export interface FocusRequest {
    /**
     * Identifier of the node.
     */
    nodeId?: NodeId;
    /**
     * Identifier of the backend node.
     */
    backendNodeId?: BackendNodeId;
    /**
     * JavaScript object id of the node wrapper.
     */
    objectId?: Runtime.RemoteObjectId;
  }

  export interface GetAttributesRequest {
    /**
     * Id of the node to retrieve attibutes for.
     */
    nodeId: NodeId;
  }

  export interface GetAttributesResponse extends ProtocolResponseWithError {
    /**
     * An interleaved array of node attribute names and values.
     */
    attributes: string[];
  }

  export interface GetBoxModelRequest {
    /**
     * Identifier of the node.
     */
    nodeId?: NodeId;
    /**
     * Identifier of the backend node.
     */
    backendNodeId?: BackendNodeId;
    /**
     * JavaScript object id of the node wrapper.
     */
    objectId?: Runtime.RemoteObjectId;
  }

  export interface GetBoxModelResponse extends ProtocolResponseWithError {
    /**
     * Box model for the node.
     */
    model: BoxModel;
  }

  export interface GetContentQuadsRequest {
    /**
     * Identifier of the node.
     */
    nodeId?: NodeId;
    /**
     * Identifier of the backend node.
     */
    backendNodeId?: BackendNodeId;
    /**
     * JavaScript object id of the node wrapper.
     */
    objectId?: Runtime.RemoteObjectId;
  }

  export interface GetContentQuadsResponse extends ProtocolResponseWithError {
    /**
     * Quads that describe node layout relative to viewport.
     */
    quads: Quad[];
  }

  export interface GetDocumentRequest {
    /**
     * The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
     * entire subtree or provide an integer larger than 0.
     */
    depth?: integer;
    /**
     * Whether or not iframes and shadow roots should be traversed when returning the subtree
     * (default is false).
     */
    pierce?: boolean;
  }

  export interface GetDocumentResponse extends ProtocolResponseWithError {
    /**
     * Resulting node.
     */
    root: Node;
  }

  export interface GetFlattenedDocumentRequest {
    /**
     * The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
     * entire subtree or provide an integer larger than 0.
     */
    depth?: integer;
    /**
     * Whether or not iframes and shadow roots should be traversed when returning the subtree
     * (default is false).
     */
    pierce?: boolean;
  }

  export interface GetFlattenedDocumentResponse extends ProtocolResponseWithError {
    /**
     * Resulting node.
     */
    nodes: Node[];
  }

  export interface GetNodesForSubtreeByStyleRequest {
    /**
     * Node ID pointing to the root of a subtree.
     */
    nodeId: NodeId;
    /**
     * The style to filter nodes by (includes nodes if any of properties matches).
     */
    computedStyles: CSSComputedStyleProperty[];
    /**
     * Whether or not iframes and shadow roots in the same target should be traversed when returning the
     * results (default is false).
     */
    pierce?: boolean;
  }

  export interface GetNodesForSubtreeByStyleResponse extends ProtocolResponseWithError {
    /**
     * Resulting nodes.
     */
    nodeIds: NodeId[];
  }

  export interface GetNodeForLocationRequest {
    /**
     * X coordinate.
     */
    x: integer;
    /**
     * Y coordinate.
     */
    y: integer;
    /**
     * False to skip to the nearest non-UA shadow root ancestor (default: false).
     */
    includeUserAgentShadowDOM?: boolean;
    /**
     * Whether to ignore pointer-events: none on elements and hit test them.
     */
    ignorePointerEventsNone?: boolean;
  }

  export interface GetNodeForLocationResponse extends ProtocolResponseWithError {
    /**
     * Resulting node.
     */
    backendNodeId: BackendNodeId;
    /**
     * Frame this node belongs to.
     */
    frameId: Page.FrameId;
    /**
     * Id of the node at given coordinates, only when enabled and requested document.
     */
    nodeId?: NodeId;
  }

  export interface GetOuterHTMLRequest {
    /**
     * Identifier of the node.
     */
    nodeId?: NodeId;
    /**
     * Identifier of the backend node.
     */
    backendNodeId?: BackendNodeId;
    /**
     * JavaScript object id of the node wrapper.
     */
    objectId?: Runtime.RemoteObjectId;
  }

  export interface GetOuterHTMLResponse extends ProtocolResponseWithError {
    /**
     * Outer HTML markup.
     */
    outerHTML: string;
  }

  export interface GetRelayoutBoundaryRequest {
    /**
     * Id of the node.
     */
    nodeId: NodeId;
  }

  export interface GetRelayoutBoundaryResponse extends ProtocolResponseWithError {
    /**
     * Relayout boundary node id for the given node.
     */
    nodeId: NodeId;
  }

  export interface GetSearchResultsRequest {
    /**
     * Unique search session identifier.
     */
    searchId: string;
    /**
     * Start index of the search result to be returned.
     */
    fromIndex: integer;
    /**
     * End index of the search result to be returned.
     */
    toIndex: integer;
  }

  export interface GetSearchResultsResponse extends ProtocolResponseWithError {
    /**
     * Ids of the search result nodes.
     */
    nodeIds: NodeId[];
  }

  export interface MoveToRequest {
    /**
     * Id of the node to move.
     */
    nodeId: NodeId;
    /**
     * Id of the element to drop the moved node into.
     */
    targetNodeId: NodeId;
    /**
     * Drop node before this one (if absent, the moved node becomes the last child of
     * `targetNodeId`).
     */
    insertBeforeNodeId?: NodeId;
  }

  export interface MoveToResponse extends ProtocolResponseWithError {
    /**
     * New id of the moved node.
     */
    nodeId: NodeId;
  }

  export interface PerformSearchRequest {
    /**
     * Plain text or query selector or XPath search query.
     */
    query: string;
    /**
     * True to search in user agent shadow DOM.
     */
    includeUserAgentShadowDOM?: boolean;
  }

  export interface PerformSearchResponse extends ProtocolResponseWithError {
    /**
     * Unique search session identifier.
     */
    searchId: string;
    /**
     * Number of search results.
     */
    resultCount: integer;
  }

  export interface PushNodeByPathToFrontendRequest {
    /**
     * Path to node in the proprietary format.
     */
    path: string;
  }

  export interface PushNodeByPathToFrontendResponse extends ProtocolResponseWithError {
    /**
     * Id of the node for given path.
     */
    nodeId: NodeId;
  }

  export interface PushNodesByBackendIdsToFrontendRequest {
    /**
     * The array of backend node ids.
     */
    backendNodeIds: BackendNodeId[];
  }

  export interface PushNodesByBackendIdsToFrontendResponse extends ProtocolResponseWithError {
    /**
     * The array of ids of pushed nodes that correspond to the backend ids specified in
     * backendNodeIds.
     */
    nodeIds: NodeId[];
  }

  export interface QuerySelectorRequest {
    /**
     * Id of the node to query upon.
     */
    nodeId: NodeId;
    /**
     * Selector string.
     */
    selector: string;
  }

  export interface QuerySelectorResponse extends ProtocolResponseWithError {
    /**
     * Query selector result.
     */
    nodeId: NodeId;
  }

  export interface QuerySelectorAllRequest {
    /**
     * Id of the node to query upon.
     */
    nodeId: NodeId;
    /**
     * Selector string.
     */
    selector: string;
  }

  export interface QuerySelectorAllResponse extends ProtocolResponseWithError {
    /**
     * Query selector result.
     */
    nodeIds: NodeId[];
  }

  export interface GetTopLayerElementsResponse extends ProtocolResponseWithError {
    /**
     * NodeIds of top layer elements
     */
    nodeIds: NodeId[];
  }

  export interface RemoveAttributeRequest {
    /**
     * Id of the element to remove attribute from.
     */
    nodeId: NodeId;
    /**
     * Name of the attribute to remove.
     */
    name: string;
  }

  export interface RemoveNodeRequest {
    /**
     * Id of the node to remove.
     */
    nodeId: NodeId;
  }

  export interface RequestChildNodesRequest {
    /**
     * Id of the node to get children for.
     */
    nodeId: NodeId;
    /**
     * The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
     * entire subtree or provide an integer larger than 0.
     */
    depth?: integer;
    /**
     * Whether or not iframes and shadow roots should be traversed when returning the sub-tree
     * (default is false).
     */
    pierce?: boolean;
  }

  export interface RequestNodeRequest {
    /**
     * JavaScript object id to convert into node.
     */
    objectId: Runtime.RemoteObjectId;
  }

  export interface RequestNodeResponse extends ProtocolResponseWithError {
    /**
     * Node id for given object.
     */
    nodeId: NodeId;
  }

  export interface ResolveNodeRequest {
    /**
     * Id of the node to resolve.
     */
    nodeId?: NodeId;
    /**
     * Backend identifier of the node to resolve.
     */
    backendNodeId?: DOM.BackendNodeId;
    /**
     * Symbolic group name that can be used to release multiple objects.
     */
    objectGroup?: string;
    /**
     * Execution context in which to resolve the node.
     */
    executionContextId?: Runtime.ExecutionContextId;
  }

  export interface ResolveNodeResponse extends ProtocolResponseWithError {
    /**
     * JavaScript object wrapper for given node.
     */
    object: Runtime.RemoteObject;
  }

  export interface SetAttributeValueRequest {
    /**
     * Id of the element to set attribute for.
     */
    nodeId: NodeId;
    /**
     * Attribute name.
     */
    name: string;
    /**
     * Attribute value.
     */
    value: string;
  }

  export interface SetAttributesAsTextRequest {
    /**
     * Id of the element to set attributes for.
     */
    nodeId: NodeId;
    /**
     * Text with a number of attributes. Will parse this text using HTML parser.
     */
    text: string;
    /**
     * Attribute name to replace with new attributes derived from text in case text parsed
     * successfully.
     */
    name?: string;
  }

  export interface SetFileInputFilesRequest {
    /**
     * Array of file paths to set.
     */
    files: string[];
    /**
     * Identifier of the node.
     */
    nodeId?: NodeId;
    /**
     * Identifier of the backend node.
     */
    backendNodeId?: BackendNodeId;
    /**
     * JavaScript object id of the node wrapper.
     */
    objectId?: Runtime.RemoteObjectId;
  }

  export interface SetNodeStackTracesEnabledRequest {
    /**
     * Enable or disable.
     */
    enable: boolean;
  }

  export interface GetNodeStackTracesRequest {
    /**
     * Id of the node to get stack traces for.
     */
    nodeId: NodeId;
  }

  export interface GetNodeStackTracesResponse extends ProtocolResponseWithError {
    /**
     * Creation stack trace, if available.
     */
    creation?: Runtime.StackTrace;
  }

  export interface GetFileInfoRequest {
    /**
     * JavaScript object id of the node wrapper.
     */
    objectId: Runtime.RemoteObjectId;
  }

  export interface GetFileInfoResponse extends ProtocolResponseWithError {
    path: string;
  }

  export interface SetInspectedNodeRequest {
    /**
     * DOM node id to be accessible by means of $x command line API.
     */
    nodeId: NodeId;
  }

  export interface SetNodeNameRequest {
    /**
     * Id of the node to set name for.
     */
    nodeId: NodeId;
    /**
     * New node's name.
     */
    name: string;
  }

  export interface SetNodeNameResponse extends ProtocolResponseWithError {
    /**
     * New node's id.
     */
    nodeId: NodeId;
  }

  export interface SetNodeValueRequest {
    /**
     * Id of the node to set value for.
     */
    nodeId: NodeId;
    /**
     * New node's value.
     */
    value: string;
  }

  export interface SetOuterHTMLRequest {
    /**
     * Id of the node to set markup for.
     */
    nodeId: NodeId;
    /**
     * Outer HTML markup to set.
     */
    outerHTML: string;
  }

  export interface GetFrameOwnerRequest {
    frameId: Page.FrameId;
  }

  export interface GetFrameOwnerResponse extends ProtocolResponseWithError {
    /**
     * Resulting node.
     */
    backendNodeId: BackendNodeId;
    /**
     * Id of the node at given coordinates, only when enabled and requested document.
     */
    nodeId?: NodeId;
  }

  export interface GetContainerForNodeRequest {
    nodeId: NodeId;
    containerName?: string;
  }

  export interface GetContainerForNodeResponse extends ProtocolResponseWithError {
    /**
     * The container node for the given node, or null if not found.
     */
    nodeId?: NodeId;
  }

  export interface GetQueryingDescendantsForContainerRequest {
    /**
     * Id of the container node to find querying descendants from.
     */
    nodeId: NodeId;
  }

  export interface GetQueryingDescendantsForContainerResponse extends ProtocolResponseWithError {
    /**
     * Descendant nodes with container queries against the given container.
     */
    nodeIds: NodeId[];
  }

  /**
   * Fired when `Element`'s attribute is modified.
   */
  export interface AttributeModifiedEvent {
    /**
     * Id of the node that has changed.
     */
    nodeId: NodeId;
    /**
     * Attribute name.
     */
    name: string;
    /**
     * Attribute value.
     */
    value: string;
  }

  /**
   * Fired when `Element`'s attribute is removed.
   */
  export interface AttributeRemovedEvent {
    /**
     * Id of the node that has changed.
     */
    nodeId: NodeId;
    /**
     * A ttribute name.
     */
    name: string;
  }

  /**
   * Mirrors `DOMCharacterDataModified` event.
   */
  export interface CharacterDataModifiedEvent {
    /**
     * Id of the node that has changed.
     */
    nodeId: NodeId;
    /**
     * New text value.
     */
    characterData: string;
  }

  /**
   * Fired when `Container`'s child node count has changed.
   */
  export interface ChildNodeCountUpdatedEvent {
    /**
     * Id of the node that has changed.
     */
    nodeId: NodeId;
    /**
     * New node count.
     */
    childNodeCount: integer;
  }

  /**
   * Mirrors `DOMNodeInserted` event.
   */
  export interface ChildNodeInsertedEvent {
    /**
     * Id of the node that has changed.
     */
    parentNodeId: NodeId;
    /**
     * If of the previous siblint.
     */
    previousNodeId: NodeId;
    /**
     * Inserted node data.
     */
    node: Node;
  }

  /**
   * Mirrors `DOMNodeRemoved` event.
   */
  export interface ChildNodeRemovedEvent {
    /**
     * Parent id.
     */
    parentNodeId: NodeId;
    /**
     * Id of the node that has been removed.
     */
    nodeId: NodeId;
  }

  /**
   * Called when distribution is changed.
   */
  export interface DistributedNodesUpdatedEvent {
    /**
     * Insertion point where distributed nodes were updated.
     */
    insertionPointId: NodeId;
    /**
     * Distributed nodes for given insertion point.
     */
    distributedNodes: BackendNode[];
  }

  /**
   * Fired when `Element`'s inline style is modified via a CSS property modification.
   */
  export interface InlineStyleInvalidatedEvent {
    /**
     * Ids of the nodes for which the inline styles have been invalidated.
     */
    nodeIds: NodeId[];
  }

  /**
   * Called when a pseudo element is added to an element.
   */
  export interface PseudoElementAddedEvent {
    /**
     * Pseudo element's parent element id.
     */
    parentId: NodeId;
    /**
     * The added pseudo element.
     */
    pseudoElement: Node;
  }

  /**
   * Called when a pseudo element is removed from an element.
   */
  export interface PseudoElementRemovedEvent {
    /**
     * Pseudo element's parent element id.
     */
    parentId: NodeId;
    /**
     * The removed pseudo element id.
     */
    pseudoElementId: NodeId;
  }

  /**
   * Fired when backend wants to provide client with the missing DOM structure. This happens upon
   * most of the calls requesting node ids.
   */
  export interface SetChildNodesEvent {
    /**
     * Parent node id to populate with children.
     */
    parentId: NodeId;
    /**
     * Child nodes array.
     */
    nodes: Node[];
  }

  /**
   * Called when shadow root is popped from the element.
   */
  export interface ShadowRootPoppedEvent {
    /**
     * Host element id.
     */
    hostId: NodeId;
    /**
     * Shadow root id.
     */
    rootId: NodeId;
  }

  /**
   * Called when shadow root is pushed into the element.
   */
  export interface ShadowRootPushedEvent {
    /**
     * Host element id.
     */
    hostId: NodeId;
    /**
     * Shadow root.
     */
    root: Node;
  }
}

/**
 * DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript
 * execution will stop on these operations as if there was a regular breakpoint set.
 */
export namespace DOMDebugger {

  /**
   * DOM breakpoint type.
   */
  export const enum DOMBreakpointType {
    SubtreeModified = 'subtree-modified',
    AttributeModified = 'attribute-modified',
    NodeRemoved = 'node-removed',
  }

  /**
   * CSP Violation type.
   */
  export const enum CSPViolationType {
    TrustedtypeSinkViolation = 'trustedtype-sink-violation',
    TrustedtypePolicyViolation = 'trustedtype-policy-violation',
  }

  /**
   * Object event listener.
   */
  export interface EventListener {
    /**
     * `EventListener`'s type.
     */
    type: string;
    /**
     * `EventListener`'s useCapture.
     */
    useCapture: boolean;
    /**
     * `EventListener`'s passive flag.
     */
    passive: boolean;
    /**
     * `EventListener`'s once flag.
     */
    once: boolean;
    /**
     * Script id of the handler code.
     */
    scriptId: Runtime.ScriptId;
    /**
     * Line number in the script (0-based).
     */
    lineNumber: integer;
    /**
     * Column number in the script (0-based).
     */
    columnNumber: integer;
    /**
     * Event handler function value.
     */
    handler?: Runtime.RemoteObject;
    /**
     * Event original handler function value.
     */
    originalHandler?: Runtime.RemoteObject;
    /**
     * Node the listener is added to (if any).
     */
    backendNodeId?: DOM.BackendNodeId;
  }

  export interface GetEventListenersRequest {
    /**
     * Identifier of the object to return listeners for.
     */
    objectId: Runtime.RemoteObjectId;
    /**
     * The maximum depth at which Node children should be retrieved, defaults to 1. Use -1 for the
     * entire subtree or provide an integer larger than 0.
     */
    depth?: integer;
    /**
     * Whether or not iframes and shadow roots should be traversed when returning the subtree
     * (default is false). Reports listeners for all contexts if pierce is enabled.
     */
    pierce?: boolean;
  }

  export interface GetEventListenersResponse extends ProtocolResponseWithError {
    /**
     * Array of relevant listeners.
     */
    listeners: EventListener[];
  }

  export interface RemoveDOMBreakpointRequest {
    /**
     * Identifier of the node to remove breakpoint from.
     */
    nodeId: DOM.NodeId;
    /**
     * Type of the breakpoint to remove.
     */
    type: DOMBreakpointType;
  }

  export interface RemoveEventListenerBreakpointRequest {
    /**
     * Event name.
     */
    eventName: string;
    /**
     * EventTarget interface name.
     */
    targetName?: string;
  }

  export interface RemoveInstrumentationBreakpointRequest {
    /**
     * Instrumentation name to stop on.
     */
    eventName: string;
  }

  export interface RemoveXHRBreakpointRequest {
    /**
     * Resource URL substring.
     */
    url: string;
  }

  export interface SetBreakOnCSPViolationRequest {
    /**
     * CSP Violations to stop upon.
     */
    violationTypes: CSPViolationType[];
  }

  export interface SetDOMBreakpointRequest {
    /**
     * Identifier of the node to set breakpoint on.
     */
    nodeId: DOM.NodeId;
    /**
     * Type of the operation to stop upon.
     */
    type: DOMBreakpointType;
  }

  export interface SetEventListenerBreakpointRequest {
    /**
     * DOM Event name to stop on (any DOM event will do).
     */
    eventName: string;
    /**
     * EventTarget interface name to stop on. If equal to `"*"` or not provided, will stop on any
     * EventTarget.
     */
    targetName?: string;
  }

  export interface SetInstrumentationBreakpointRequest {
    /**
     * Instrumentation name to stop on.
     */
    eventName: string;
  }

  export interface SetXHRBreakpointRequest {
    /**
     * Resource URL substring. All XHRs having this substring in the URL will get stopped upon.
     */
    url: string;
  }
}

/**
 * EventBreakpoints permits setting breakpoints on particular operations and
 * events in targets that run JavaScript but do not have a DOM.
 * JavaScript execution will stop on these operations as if there was a regular
 * breakpoint set.
 */
export namespace EventBreakpoints {

  export interface SetInstrumentationBreakpointRequest {
    /**
     * Instrumentation name to stop on.
     */
    eventName: string;
  }

  export interface RemoveInstrumentationBreakpointRequest {
    /**
     * Instrumentation name to stop on.
     */
    eventName: string;
  }
}

/**
 * This domain facilitates obtaining document snapshots with DOM, layout, and style information.
 */
export namespace DOMSnapshot {

  /**
   * A Node in the DOM tree.
   */
  export interface DOMNode {
    /**
     * `Node`'s nodeType.
     */
    nodeType: integer;
    /**
     * `Node`'s nodeName.
     */
    nodeName: string;
    /**
     * `Node`'s nodeValue.
     */
    nodeValue: string;
    /**
     * Only set for textarea elements, contains the text value.
     */
    textValue?: string;
    /**
     * Only set for input elements, contains the input's associated text value.
     */
    inputValue?: string;
    /**
     * Only set for radio and checkbox input elements, indicates if the element has been checked
     */
    inputChecked?: boolean;
    /**
     * Only set for option elements, indicates if the element has been selected
     */
    optionSelected?: boolean;
    /**
     * `Node`'s id, corresponds to DOM.Node.backendNodeId.
     */
    backendNodeId: DOM.BackendNodeId;
    /**
     * The indexes of the node's child nodes in the `domNodes` array returned by `getSnapshot`, if
     * any.
     */
    childNodeIndexes?: integer[];
    /**
     * Attributes of an `Element` node.
     */
    attributes?: NameValue[];
    /**
     * Indexes of pseudo elements associated with this node in the `domNodes` array returned by
     * `getSnapshot`, if any.
     */
    pseudoElementIndexes?: integer[];
    /**
     * The index of the node's related layout tree node in the `layoutTreeNodes` array returned by
     * `getSnapshot`, if any.
     */
    layoutNodeIndex?: integer;
    /**
     * Document URL that `Document` or `FrameOwner` node points to.
     */
    documentURL?: string;
    /**
     * Base URL that `Document` or `FrameOwner` node uses for URL completion.
     */
    baseURL?: string;
    /**
     * Only set for documents, contains the document's content language.
     */
    contentLanguage?: string;
    /**
     * Only set for documents, contains the document's character set encoding.
     */
    documentEncoding?: string;
    /**
     * `DocumentType` node's publicId.
     */
    publicId?: string;
    /**
     * `DocumentType` node's systemId.
     */
    systemId?: string;
    /**
     * Frame ID for frame owner elements and also for the document node.
     */
    frameId?: Page.FrameId;
    /**
     * The index of a frame owner element's content document in the `domNodes` array returned by
     * `getSnapshot`, if any.
     */
    contentDocumentIndex?: integer;
    /**
     * Type of a pseudo element node.
     */
    pseudoType?: DOM.PseudoType;
    /**
     * Shadow root type.
     */
    shadowRootType?: DOM.ShadowRootType;
    /**
     * Whether this DOM node responds to mouse clicks. This includes nodes that have had click
     * event listeners attached via JavaScript as well as anchor tags that naturally navigate when
     * clicked.
     */
    isClickable?: boolean;
    /**
     * Details of the node's event listeners, if any.
     */
    eventListeners?: DOMDebugger.EventListener[];
    /**
     * The selected url for nodes with a srcset attribute.
     */
    currentSourceURL?: string;
    /**
     * The url of the script (if any) that generates this node.
     */
    originURL?: string;
    /**
     * Scroll offsets, set when this node is a Document.
     */
    scrollOffsetX?: number;
    scrollOffsetY?: number;
  }

  /**
   * Details of post layout rendered text positions. The exact layout should not be regarded as
   * stable and may change between versions.
   */
  export interface InlineTextBox {
    /**
     * The bounding box in document coordinates. Note that scroll offset of the document is ignored.
     */
    boundingBox: DOM.Rect;
    /**
     * The starting index in characters, for this post layout textbox substring. Characters that
     * would be represented as a surrogate pair in UTF-16 have length 2.
     */
    startCharacterIndex: integer;
    /**
     * The number of characters in this post layout textbox substring. Characters that would be
     * represented as a surrogate pair in UTF-16 have length 2.
     */
    numCharacters: integer;
  }

  /**
   * Details of an element in the DOM tree with a LayoutObject.
   */
  export interface LayoutTreeNode {
    /**
     * The index of the related DOM node in the `domNodes` array returned by `getSnapshot`.
     */
    domNodeIndex: integer;
    /**
     * The bounding box in document coordinates. Note that scroll offset of the document is ignored.
     */
    boundingBox: DOM.Rect;
    /**
     * Contents of the LayoutText, if any.
     */
    layoutText?: string;
    /**
     * The post-layout inline text nodes, if any.
     */
    inlineTextNodes?: InlineTextBox[];
    /**
     * Index into the `computedStyles` array returned by `getSnapshot`.
     */
    styleIndex?: integer;
    /**
     * Global paint order index, which is determined by the stacking order of the nodes. Nodes
     * that are painted together will have the same index. Only provided if includePaintOrder in
     * getSnapshot was true.
     */
    paintOrder?: integer;
    /**
     * Set to true to indicate the element begins a new stacking context.
     */
    isStackingContext?: boolean;
  }

  /**
   * A subset of the full ComputedStyle as defined by the request whitelist.
   */
  export interface ComputedStyle {
    /**
     * Name/value pairs of computed style properties.
     */
    properties: NameValue[];
  }

  /**
   * A name/value pair.
   */
  export interface NameValue {
    /**
     * Attribute/property name.
     */
    name: string;
    /**
     * Attribute/property value.
     */
    value: string;
  }

  /**
   * Index of the string in the strings table.
   */
  export type StringIndex = integer;

  /**
   * Index of the string in the strings table.
   */
  export type ArrayOfStrings = StringIndex[];

  /**
   * Data that is only present on rare nodes.
   */
  export interface RareStringData {
    index: integer[];
    value: StringIndex[];
  }

  export interface RareBooleanData {
    index: integer[];
  }

  export interface RareIntegerData {
    index: integer[];
    value: integer[];
  }

  export type Rectangle = number[];

  /**
   * Document snapshot.
   */
  export interface DocumentSnapshot {
    /**
     * Document URL that `Document` or `FrameOwner` node points to.
     */
    documentURL: StringIndex;
    /**
     * Document title.
     */
    title: StringIndex;
    /**
     * Base URL that `Document` or `FrameOwner` node uses for URL completion.
     */
    baseURL: StringIndex;
    /**
     * Contains the document's content language.
     */
    contentLanguage: StringIndex;
    /**
     * Contains the document's character set encoding.
     */
    encodingName: StringIndex;
    /**
     * `DocumentType` node's publicId.
     */
    publicId: StringIndex;
    /**
     * `DocumentType` node's systemId.
     */
    systemId: StringIndex;
    /**
     * Frame ID for frame owner elements and also for the document node.
     */
    frameId: StringIndex;
    /**
     * A table with dom nodes.
     */
    nodes: NodeTreeSnapshot;
    /**
     * The nodes in the layout tree.
     */
    layout: LayoutTreeSnapshot;
    /**
     * The post-layout inline text nodes.
     */
    textBoxes: TextBoxSnapshot;
    /**
     * Horizontal scroll offset.
     */
    scrollOffsetX?: number;
    /**
     * Vertical scroll offset.
     */
    scrollOffsetY?: number;
    /**
     * Document content width.
     */
    contentWidth?: number;
    /**
     * Document content height.
     */
    contentHeight?: number;
  }

  /**
   * Table containing nodes.
   */
  export interface NodeTreeSnapshot {
    /**
     * Parent node index.
     */
    parentIndex?: integer[];
    /**
     * `Node`'s nodeType.
     */
    nodeType?: integer[];
    /**
     * Type of the shadow root the `Node` is in. String values are equal to the `ShadowRootType` enum.
     */
    shadowRootType?: RareStringData;
    /**
     * `Node`'s nodeName.
     */
    nodeName?: StringIndex[];
    /**
     * `Node`'s nodeValue.
     */
    nodeValue?: StringIndex[];
    /**
     * `Node`'s id, corresponds to DOM.Node.backendNodeId.
     */
    backendNodeId?: DOM.BackendNodeId[];
    /**
     * Attributes of an `Element` node. Flatten name, value pairs.
     */
    attributes?: ArrayOfStrings[];
    /**
     * Only set for textarea elements, contains the text value.
     */
    textValue?: RareStringData;
    /**
     * Only set for input elements, contains the input's associated text value.
     */
    inputValue?: RareStringData;
    /**
     * Only set for radio and checkbox input elements, indicates if the element has been checked
     */
    inputChecked?: RareBooleanData;
    /**
     * Only set for option elements, indicates if the element has been selected
     */
    optionSelected?: RareBooleanData;
    /**
     * The index of the document in the list of the snapshot documents.
     */
    contentDocumentIndex?: RareIntegerData;
    /**
     * Type of a pseudo element node.
     */
    pseudoType?: RareStringData;
    /**
     * Pseudo element identifier for this node. Only present if there is a
     * valid pseudoType.
     */
    pseudoIdentifier?: RareStringData;
    /**
     * Whether this DOM node responds to mouse clicks. This includes nodes that have had click
     * event listeners attached via JavaScript as well as anchor tags that naturally navigate when
     * clicked.
     */
    isClickable?: RareBooleanData;
    /**
     * The selected url for nodes with a srcset attribute.
     */
    currentSourceURL?: RareStringData;
    /**
     * The url of the script (if any) that generates this node.
     */
    originURL?: RareStringData;
  }

  /**
   * Table of details of an element in the DOM tree with a LayoutObject.
   */
  export interface LayoutTreeSnapshot {
    /**
     * Index of the corresponding node in the `NodeTreeSnapshot` array returned by `captureSnapshot`.
     */
    nodeIndex: integer[];
    /**
     * Array of indexes specifying computed style strings, filtered according to the `computedStyles` parameter passed to `captureSnapshot`.
     */
    styles: ArrayOfStrings[];
    /**
     * The absolute position bounding box.
     */
    bounds: Rectangle[];
    /**
     * Contents of the LayoutText, if any.
     */
    text: StringIndex[];
    /**
     * Stacking context information.
     */
    stackingContexts: RareBooleanData;
    /**
     * Global paint order index, which is determined by the stacking order of the nodes. Nodes
     * that are painted together will have the same index. Only provided if includePaintOrder in
     * captureSnapshot was true.
     */
    paintOrders?: integer[];
    /**
     * The offset rect of nodes. Only available when includeDOMRects is set to true
     */
    offsetRects?: Rectangle[];
    /**
     * The scroll rect of nodes. Only available when includeDOMRects is set to true
     */
    scrollRects?: Rectangle[];
    /**
     * The client rect of nodes. Only available when includeDOMRects is set to true
     */
    clientRects?: Rectangle[];
    /**
     * The list of background colors that are blended with colors of overlapping elements.
     */
    blendedBackgroundColors?: StringIndex[];
    /**
     * The list of computed text opacities.
     */
    textColorOpacities?: number[];
  }

  /**
   * Table of details of the post layout rendered text positions. The exact layout should not be regarded as
   * stable and may change between versions.
   */
  export interface TextBoxSnapshot {
    /**
     * Index of the layout tree node that owns this box collection.
     */
    layoutIndex: integer[];
    /**
     * The absolute position bounding box.
     */
    bounds: Rectangle[];
    /**
     * The starting index in characters, for this post layout textbox substring. Characters that
     * would be represented as a surrogate pair in UTF-16 have length 2.
     */
    start: integer[];
    /**
     * The number of characters in this post layout textbox substring. Characters that would be
     * represented as a surrogate pair in UTF-16 have length 2.
     */
    length: integer[];
  }

  export interface GetSnapshotRequest {
    /**
     * Whitelist of computed styles to return.
     */
    computedStyleWhitelist: string[];
    /**
     * Whether or not to retrieve details of DOM listeners (default false).
     */
    includeEventListeners?: boolean;
    /**
     * Whether to determine and include the paint order index of LayoutTreeNodes (default false).
     */
    includePaintOrder?: boolean;
    /**
     * Whether to include UA shadow tree in the snapshot (default false).
     */
    includeUserAgentShadowTree?: boolean;
  }

  export interface GetSnapshotResponse extends ProtocolResponseWithError {
    /**
     * The nodes in the DOM tree. The DOMNode at index 0 corresponds to the root document.
     */
    domNodes: DOMNode[];
    /**
     * The nodes in the layout tree.
     */
    layoutTreeNodes: LayoutTreeNode[];
    /**
     * Whitelisted ComputedStyle properties for each node in the layout tree.
     */
    computedStyles: ComputedStyle[];
  }

  export interface CaptureSnapshotRequest {
    /**
     * Whitelist of computed styles to return.
     */
    computedStyles: string[];
    /**
     * Whether to include layout object paint orders into the snapshot.
     */
    includePaintOrder?: boolean;
    /**
     * Whether to include DOM rectangles (offsetRects, clientRects, scrollRects) into the snapshot
     */
    includeDOMRects?: boolean;
    /**
     * Whether to include blended background colors in the snapshot (default: false).
     * Blended background color is achieved by blending background colors of all elements
     * that overlap with the current element.
     */
    includeBlendedBackgroundColors?: boolean;
    /**
     * Whether to include text color opacity in the snapshot (default: false).
     * An element might have the opacity property set that affects the text color of the element.
     * The final text color opacity is computed based on the opacity of all overlapping elements.
     */
    includeTextColorOpacities?: boolean;
  }

  export interface CaptureSnapshotResponse extends ProtocolResponseWithError {
    /**
     * The nodes in the DOM tree. The DOMNode at index 0 corresponds to the root document.
     */
    documents: DocumentSnapshot[];
    /**
     * Shared string table that all string properties refer to with indexes.
     */
    strings: string[];
  }
}

/**
 * Query and modify DOM storage.
 */
export namespace DOMStorage {

  export type SerializedStorageKey = string;

  /**
   * DOM Storage identifier.
   */
  export interface StorageId {
    /**
     * Security origin for the storage.
     */
    securityOrigin?: string;
    /**
     * Represents a key by which DOM Storage keys its CachedStorageAreas
     */
    storageKey?: SerializedStorageKey;
    /**
     * Whether the storage is local storage (not session storage).
     */
    isLocalStorage: boolean;
  }

  /**
   * DOM Storage item.
   */
  export type Item = string[];

  export interface ClearRequest {
    storageId: StorageId;
  }

  export interface GetDOMStorageItemsRequest {
    storageId: StorageId;
  }

  export interface GetDOMStorageItemsResponse extends ProtocolResponseWithError {
    entries: Item[];
  }

  export interface RemoveDOMStorageItemRequest {
    storageId: StorageId;
    key: string;
  }

  export interface SetDOMStorageItemRequest {
    storageId: StorageId;
    key: string;
    value: string;
  }

  export interface DomStorageItemAddedEvent {
    storageId: StorageId;
    key: string;
    newValue: string;
  }

  export interface DomStorageItemRemovedEvent {
    storageId: StorageId;
    key: string;
  }

  export interface DomStorageItemUpdatedEvent {
    storageId: StorageId;
    key: string;
    oldValue: string;
    newValue: string;
  }

  export interface DomStorageItemsClearedEvent {
    storageId: StorageId;
  }
}

export namespace Database {

  /**
   * Unique identifier of Database object.
   */
  export type DatabaseId = OpaqueIdentifier<string, 'Protocol.Database.DatabaseId'>;

  /**
   * Database object.
   */
  export interface Database {
    /**
     * Database ID.
     */
    id: DatabaseId;
    /**
     * Database domain.
     */
    domain: string;
    /**
     * Database name.
     */
    name: string;
    /**
     * Database version.
     */
    version: string;
  }

  /**
   * Database error.
   */
  export interface Error {
    /**
     * Error message.
     */
    message: string;
    /**
     * Error code.
     */
    code: integer;
  }

  export interface ExecuteSQLRequest {
    databaseId: DatabaseId;
    query: string;
  }

  export interface ExecuteSQLResponse extends ProtocolResponseWithError {
    columnNames?: string[];
    values?: any[];
    sqlError?: Error;
  }

  export interface GetDatabaseTableNamesRequest {
    databaseId: DatabaseId;
  }

  export interface GetDatabaseTableNamesResponse extends ProtocolResponseWithError {
    tableNames: string[];
  }

  export interface AddDatabaseEvent {
    database: Database;
  }
}

export namespace DeviceOrientation {

  export interface SetDeviceOrientationOverrideRequest {
    /**
     * Mock alpha
     */
    alpha: number;
    /**
     * Mock beta
     */
    beta: number;
    /**
     * Mock gamma
     */
    gamma: number;
  }
}

/**
 * This domain emulates different environments for the page.
 */
export namespace Emulation {

  export const enum ScreenOrientationType {
    PortraitPrimary = 'portraitPrimary',
    PortraitSecondary = 'portraitSecondary',
    LandscapePrimary = 'landscapePrimary',
    LandscapeSecondary = 'landscapeSecondary',
  }

  /**
   * Screen orientation.
   */
  export interface ScreenOrientation {
    /**
     * Orientation type.
     */
    type: ScreenOrientationType;
    /**
     * Orientation angle.
     */
    angle: integer;
  }

  export const enum DisplayFeatureOrientation {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
  }

  export interface DisplayFeature {
    /**
     * Orientation of a display feature in relation to screen
     */
    orientation: DisplayFeatureOrientation;
    /**
     * The offset from the screen origin in either the x (for vertical
     * orientation) or y (for horizontal orientation) direction.
     */
    offset: integer;
    /**
     * A display feature may mask content such that it is not physically
     * displayed - this length along with the offset describes this area.
     * A display feature that only splits content will have a 0 mask_length.
     */
    maskLength: integer;
  }

  export interface MediaFeature {
    name: string;
    value: string;
  }

  /**
   * advance: If the scheduler runs out of immediate work, the virtual time base may fast forward to
   * allow the next delayed task (if any) to run; pause: The virtual time base may not advance;
   * pauseIfNetworkFetchesPending: The virtual time base may not advance if there are any pending
   * resource fetches.
   */
  export const enum VirtualTimePolicy {
    Advance = 'advance',
    Pause = 'pause',
    PauseIfNetworkFetchesPending = 'pauseIfNetworkFetchesPending',
  }

  /**
   * Used to specify User Agent Cient Hints to emulate. See https://wicg.github.io/ua-client-hints
   */
  export interface UserAgentBrandVersion {
    brand: string;
    version: string;
  }

  /**
   * Used to specify User Agent Cient Hints to emulate. See https://wicg.github.io/ua-client-hints
   * Missing optional values will be filled in by the target with what it would normally use.
   */
  export interface UserAgentMetadata {
    brands?: UserAgentBrandVersion[];
    fullVersionList?: UserAgentBrandVersion[];
    fullVersion?: string;
    platform: string;
    platformVersion: string;
    architecture: string;
    model: string;
    mobile: boolean;
    bitness?: string;
    wow64?: boolean;
  }

  /**
   * Enum of image types that can be disabled.
   */
  export const enum DisabledImageType {
    Avif = 'avif',
    Jxl = 'jxl',
    Webp = 'webp',
  }

  export interface CanEmulateResponse extends ProtocolResponseWithError {
    /**
     * True if emulation is supported.
     */
    result: boolean;
  }

  export interface SetFocusEmulationEnabledRequest {
    /**
     * Whether to enable to disable focus emulation.
     */
    enabled: boolean;
  }

  export interface SetAutoDarkModeOverrideRequest {
    /**
     * Whether to enable or disable automatic dark mode.
     * If not specified, any existing override will be cleared.
     */
    enabled?: boolean;
  }

  export interface SetCPUThrottlingRateRequest {
    /**
     * Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc).
     */
    rate: number;
  }

  export interface SetDefaultBackgroundColorOverrideRequest {
    /**
     * RGBA of the default background color. If not specified, any existing override will be
     * cleared.
     */
    color?: DOM.RGBA;
  }

  export interface SetDeviceMetricsOverrideRequest {
    /**
     * Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.
     */
    width: integer;
    /**
     * Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.
     */
    height: integer;
    /**
     * Overriding device scale factor value. 0 disables the override.
     */
    deviceScaleFactor: number;
    /**
     * Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
     * autosizing and more.
     */
    mobile: boolean;
    /**
     * Scale to apply to resulting view image.
     */
    scale?: number;
    /**
     * Overriding screen width value in pixels (minimum 0, maximum 10000000).
     */
    screenWidth?: integer;
    /**
     * Overriding screen height value in pixels (minimum 0, maximum 10000000).
     */
    screenHeight?: integer;
    /**
     * Overriding view X position on screen in pixels (minimum 0, maximum 10000000).
     */
    positionX?: integer;
    /**
     * Overriding view Y position on screen in pixels (minimum 0, maximum 10000000).
     */
    positionY?: integer;
    /**
     * Do not set visible view size, rely upon explicit setVisibleSize call.
     */
    dontSetVisibleSize?: boolean;
    /**
     * Screen orientation override.
     */
    screenOrientation?: ScreenOrientation;
    /**
     * If set, the visible area of the page will be overridden to this viewport. This viewport
     * change is not observed by the page, e.g. viewport-relative elements do not change positions.
     */
    viewport?: Page.Viewport;
    /**
     * If set, the display feature of a multi-segment screen. If not set, multi-segment support
     * is turned-off.
     */
    displayFeature?: DisplayFeature;
  }

  export interface SetScrollbarsHiddenRequest {
    /**
     * Whether scrollbars should be always hidden.
     */
    hidden: boolean;
  }

  export interface SetDocumentCookieDisabledRequest {
    /**
     * Whether document.coookie API should be disabled.
     */
    disabled: boolean;
  }

  export const enum SetEmitTouchEventsForMouseRequestConfiguration {
    Mobile = 'mobile',
    Desktop = 'desktop',
  }

  export interface SetEmitTouchEventsForMouseRequest {
    /**
     * Whether touch emulation based on mouse input should be enabled.
     */
    enabled: boolean;
    /**
     * Touch/gesture events configuration. Default: current platform.
     */
    configuration?: SetEmitTouchEventsForMouseRequestConfiguration;
  }

  export interface SetEmulatedMediaRequest {
    /**
     * Media type to emulate. Empty string disables the override.
     */
    media?: string;
    /**
     * Media features to emulate.
     */
    features?: MediaFeature[];
  }

  export const enum SetEmulatedVisionDeficiencyRequestType {
    None = 'none',
    Achromatopsia = 'achromatopsia',
    BlurredVision = 'blurredVision',
    Deuteranopia = 'deuteranopia',
    Protanopia = 'protanopia',
    Tritanopia = 'tritanopia',
  }

  export interface SetEmulatedVisionDeficiencyRequest {
    /**
     * Vision deficiency to emulate.
     */
    type: SetEmulatedVisionDeficiencyRequestType;
  }

  export interface SetGeolocationOverrideRequest {
    /**
     * Mock latitude
     */
    latitude?: number;
    /**
     * Mock longitude
     */
    longitude?: number;
    /**
     * Mock accuracy
     */
    accuracy?: number;
  }

  export interface SetIdleOverrideRequest {
    /**
     * Mock isUserActive
     */
    isUserActive: boolean;
    /**
     * Mock isScreenUnlocked
     */
    isScreenUnlocked: boolean;
  }

  export interface SetNavigatorOverridesRequest {
    /**
     * The platform navigator.platform should return.
     */
    platform: string;
  }

  export interface SetPageScaleFactorRequest {
    /**
     * Page scale factor.
     */
    pageScaleFactor: number;
  }

  export interface SetScriptExecutionDisabledRequest {
    /**
     * Whether script execution should be disabled in the page.
     */
    value: boolean;
  }

  export interface SetTouchEmulationEnabledRequest {
    /**
     * Whether the touch event emulation should be enabled.
     */
    enabled: boolean;
    /**
     * Maximum touch points supported. Defaults to one.
     */
    maxTouchPoints?: integer;
  }

  export interface SetVirtualTimePolicyRequest {
    policy: VirtualTimePolicy;
    /**
     * If set, after this many virtual milliseconds have elapsed virtual time will be paused and a
     * virtualTimeBudgetExpired event is sent.
     */
    budget?: number;
    /**
     * If set this specifies the maximum number of tasks that can be run before virtual is forced
     * forwards to prevent deadlock.
     */
    maxVirtualTimeTaskStarvationCount?: integer;
    /**
     * If set, base::Time::Now will be overridden to initially return this value.
     */
    initialVirtualTime?: Network.TimeSinceEpoch;
  }

  export interface SetVirtualTimePolicyResponse extends ProtocolResponseWithError {
    /**
     * Absolute timestamp at which virtual time was first enabled (up time in milliseconds).
     */
    virtualTimeTicksBase: number;
  }

  export interface SetLocaleOverrideRequest {
    /**
     * ICU style C locale (e.g. "en_US"). If not specified or empty, disables the override and
     * restores default host system locale.
     */
    locale?: string;
  }

  export interface SetTimezoneOverrideRequest {
    /**
     * The timezone identifier. If empty, disables the override and
     * restores default host system timezone.
     */
    timezoneId: string;
  }

  export interface SetVisibleSizeRequest {
    /**
     * Frame width (DIP).
     */
    width: integer;
    /**
     * Frame height (DIP).
     */
    height: integer;
  }

  export interface SetDisabledImageTypesRequest {
    /**
     * Image types to disable.
     */
    imageTypes: DisabledImageType[];
  }

  export interface SetHardwareConcurrencyOverrideRequest {
    /**
     * Hardware concurrency to report
     */
    hardwareConcurrency: integer;
  }

  export interface SetUserAgentOverrideRequest {
    /**
     * User agent to use.
     */
    userAgent: string;
    /**
     * Browser langugage to emulate.
     */
    acceptLanguage?: string;
    /**
     * The platform navigator.platform should return.
     */
    platform?: string;
    /**
     * To be sent in Sec-CH-UA-* headers and returned in navigator.userAgentData
     */
    userAgentMetadata?: UserAgentMetadata;
  }

  export interface SetAutomationOverrideRequest {
    /**
     * Whether the override should be enabled.
     */
    enabled: boolean;
  }
}

/**
 * This domain provides experimental commands only supported in headless mode.
 */
export namespace HeadlessExperimental {

  export const enum ScreenshotParamsFormat {
    Jpeg = 'jpeg',
    Png = 'png',
  }

  /**
   * Encoding options for a screenshot.
   */
  export interface ScreenshotParams {
    /**
     * Image compression format (defaults to png).
     */
    format?: ScreenshotParamsFormat;
    /**
     * Compression quality from range [0..100] (jpeg only).
     */
    quality?: integer;
  }

  export interface BeginFrameRequest {
    /**
     * Timestamp of this BeginFrame in Renderer TimeTicks (milliseconds of uptime). If not set,
     * the current time will be used.
     */
    frameTimeTicks?: number;
    /**
     * The interval between BeginFrames that is reported to the compositor, in milliseconds.
     * Defaults to a 60 frames/second interval, i.e. about 16.666 milliseconds.
     */
    interval?: number;
    /**
     * Whether updates should not be committed and drawn onto the display. False by default. If
     * true, only side effects of the BeginFrame will be run, such as layout and animations, but
     * any visual updates may not be visible on the display or in screenshots.
     */
    noDisplayUpdates?: boolean;
    /**
     * If set, a screenshot of the frame will be captured and returned in the response. Otherwise,
     * no screenshot will be captured. Note that capturing a screenshot can fail, for example,
     * during renderer initialization. In such a case, no screenshot data will be returned.
     */
    screenshot?: ScreenshotParams;
  }

  export interface BeginFrameResponse extends ProtocolResponseWithError {
    /**
     * Whether the BeginFrame resulted in damage and, thus, a new frame was committed to the
     * display. Reported for diagnostic uses, may be removed in the future.
     */
    hasDamage: boolean;
    /**
     * Base64-encoded image data of the screenshot, if one was requested and successfully taken.
     */
    screenshotData?: binary;
  }

  /**
   * Issued when the target starts or stops needing BeginFrames.
   * Deprecated. Issue beginFrame unconditionally instead and use result from
   * beginFrame to detect whether the frames were suppressed.
   */
  export interface NeedsBeginFramesChangedEvent {
    /**
     * True if BeginFrames are needed, false otherwise.
     */
    needsBeginFrames: boolean;
  }
}

/**
 * Input/Output operations for streams produced by DevTools.
 */
export namespace IO {

  /**
   * This is either obtained from another method or specified as `blob:&lt;uuid&gt;` where
   * `&lt;uuid&gt` is an UUID of a Blob.
   */
  export type StreamHandle = OpaqueIdentifier<string, 'Protocol.IO.StreamHandle'>;

  export interface CloseRequest {
    /**
     * Handle of the stream to close.
     */
    handle: StreamHandle;
  }

  export interface ReadRequest {
    /**
     * Handle of the stream to read.
     */
    handle: StreamHandle;
    /**
     * Seek to the specified offset before reading (if not specificed, proceed with offset
     * following the last read). Some types of streams may only support sequential reads.
     */
    offset?: integer;
    /**
     * Maximum number of bytes to read (left upon the agent discretion if not specified).
     */
    size?: integer;
  }

  export interface ReadResponse extends ProtocolResponseWithError {
    /**
     * Set if the data is base64-encoded
     */
    base64Encoded?: boolean;
    /**
     * Data that were read.
     */
    data: string;
    /**
     * Set if the end-of-file condition occurred while reading.
     */
    eof: boolean;
  }

  export interface ResolveBlobRequest {
    /**
     * Object id of a Blob object wrapper.
     */
    objectId: Runtime.RemoteObjectId;
  }

  export interface ResolveBlobResponse extends ProtocolResponseWithError {
    /**
     * UUID of the specified Blob.
     */
    uuid: string;
  }
}

export namespace IndexedDB {

  /**
   * Database with an array of object stores.
   */
  export interface DatabaseWithObjectStores {
    /**
     * Database name.
     */
    name: string;
    /**
     * Database version (type is not 'integer', as the standard
     * requires the version number to be 'unsigned long long')
     */
    version: number;
    /**
     * Object stores in this database.
     */
    objectStores: ObjectStore[];
  }

  /**
   * Object store.
   */
  export interface ObjectStore {
    /**
     * Object store name.
     */
    name: string;
    /**
     * Object store key path.
     */
    keyPath: KeyPath;
    /**
     * If true, object store has auto increment flag set.
     */
    autoIncrement: boolean;
    /**
     * Indexes in this object store.
     */
    indexes: ObjectStoreIndex[];
  }

  /**
   * Object store index.
   */
  export interface ObjectStoreIndex {
    /**
     * Index name.
     */
    name: string;
    /**
     * Index key path.
     */
    keyPath: KeyPath;
    /**
     * If true, index is unique.
     */
    unique: boolean;
    /**
     * If true, index allows multiple entries for a key.
     */
    multiEntry: boolean;
  }

  export const enum KeyType {
    Number = 'number',
    String = 'string',
    Date = 'date',
    Array = 'array',
  }

  /**
   * Key.
   */
  export interface Key {
    /**
     * Key type.
     */
    type: KeyType;
    /**
     * Number value.
     */
    number?: number;
    /**
     * String value.
     */
    string?: string;
    /**
     * Date value.
     */
    date?: number;
    /**
     * Array value.
     */
    array?: Key[];
  }

  /**
   * Key range.
   */
  export interface KeyRange {
    /**
     * Lower bound.
     */
    lower?: Key;
    /**
     * Upper bound.
     */
    upper?: Key;
    /**
     * If true lower bound is open.
     */
    lowerOpen: boolean;
    /**
     * If true upper bound is open.
     */
    upperOpen: boolean;
  }

  /**
   * Data entry.
   */
  export interface DataEntry {
    /**
     * Key object.
     */
    key: Runtime.RemoteObject;
    /**
     * Primary key object.
     */
    primaryKey: Runtime.RemoteObject;
    /**
     * Value object.
     */
    value: Runtime.RemoteObject;
  }

  export const enum KeyPathType {
    Null = 'null',
    String = 'string',
    Array = 'array',
  }

  /**
   * Key path.
   */
  export interface KeyPath {
    /**
     * Key path type.
     */
    type: KeyPathType;
    /**
     * String value.
     */
    string?: string;
    /**
     * Array value.
     */
    array?: string[];
  }

  export interface ClearObjectStoreRequest {
    /**
     * At least and at most one of securityOrigin, storageKey must be specified.
     * Security origin.
     */
    securityOrigin?: string;
    /**
     * Storage key.
     */
    storageKey?: string;
    /**
     * Database name.
     */
    databaseName: string;
    /**
     * Object store name.
     */
    objectStoreName: string;
  }

  export interface DeleteDatabaseRequest {
    /**
     * At least and at most one of securityOrigin, storageKey must be specified.
     * Security origin.
     */
    securityOrigin?: string;
    /**
     * Storage key.
     */
    storageKey?: string;
    /**
     * Database name.
     */
    databaseName: string;
  }

  export interface DeleteObjectStoreEntriesRequest {
    /**
     * At least and at most one of securityOrigin, storageKey must be specified.
     * Security origin.
     */
    securityOrigin?: string;
    /**
     * Storage key.
     */
    storageKey?: string;
    databaseName: string;
    objectStoreName: string;
    /**
     * Range of entry keys to delete
     */
    keyRange: KeyRange;
  }

  export interface RequestDataRequest {
    /**
     * At least and at most one of securityOrigin, storageKey must be specified.
     * Security origin.
     */
    securityOrigin?: string;
    /**
     * Storage key.
     */
    storageKey?: string;
    /**
     * Database name.
     */
    databaseName: string;
    /**
     * Object store name.
     */
    objectStoreName: string;
    /**
     * Index name, empty string for object store data requests.
     */
    indexName: string;
    /**
     * Number of records to skip.
     */
    skipCount: integer;
    /**
     * Number of records to fetch.
     */
    pageSize: integer;
    /**
     * Key range.
     */
    keyRange?: KeyRange;
  }

  export interface RequestDataResponse extends ProtocolResponseWithError {
    /**
     * Array of object store data entries.
     */
    objectStoreDataEntries: DataEntry[];
    /**
     * If true, there are more entries to fetch in the given range.
     */
    hasMore: boolean;
  }

  export interface GetMetadataRequest {
    /**
     * At least and at most one of securityOrigin, storageKey must be specified.
     * Security origin.
     */
    securityOrigin?: string;
    /**
     * Storage key.
     */
    storageKey?: string;
    /**
     * Database name.
     */
    databaseName: string;
    /**
     * Object store name.
     */
    objectStoreName: string;
  }

  export interface GetMetadataResponse extends ProtocolResponseWithError {
    /**
     * the entries count
     */
    entriesCount: number;
    /**
     * the current value of key generator, to become the next inserted
     * key into the object store. Valid if objectStore.autoIncrement
     * is true.
     */
    keyGeneratorValue: number;
  }

  export interface RequestDatabaseRequest {
    /**
     * At least and at most one of securityOrigin, storageKey must be specified.
     * Security origin.
     */
    securityOrigin?: string;
    /**
     * Storage key.
     */
    storageKey?: string;
    /**
     * Database name.
     */
    databaseName: string;
  }

  export interface RequestDatabaseResponse extends ProtocolResponseWithError {
    /**
     * Database with an array of object stores.
     */
    databaseWithObjectStores: DatabaseWithObjectStores;
  }

  export interface RequestDatabaseNamesRequest {
    /**
     * At least and at most one of securityOrigin, storageKey must be specified.
     * Security origin.
     */
    securityOrigin?: string;
    /**
     * Storage key.
     */
    storageKey?: string;
  }

  export interface RequestDatabaseNamesResponse extends ProtocolResponseWithError {
    /**
     * Database names for origin.
     */
    databaseNames: string[];
  }
}

export namespace Input {

  export interface TouchPoint {
    /**
     * X coordinate of the event relative to the main frame's viewport in CSS pixels.
     */
    x: number;
    /**
     * Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
     * the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
     */
    y: number;
    /**
     * X radius of the touch area (default: 1.0).
     */
    radiusX?: number;
    /**
     * Y radius of the touch area (default: 1.0).
     */
    radiusY?: number;
    /**
     * Rotation angle (default: 0.0).
     */
    rotationAngle?: number;
    /**
     * Force (default: 1.0).
     */
    force?: number;
    /**
     * The normalized tangential pressure, which has a range of [-1,1] (default: 0).
     */
    tangentialPressure?: number;
    /**
     * The plane angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis, in degrees of the range [-90,90], a positive tiltX is to the right (default: 0)
     */
    tiltX?: integer;
    /**
     * The plane angle between the X-Z plane and the plane containing both the stylus axis and the X axis, in degrees of the range [-90,90], a positive tiltY is towards the user (default: 0).
     */
    tiltY?: integer;
    /**
     * The clockwise rotation of a pen stylus around its own major axis, in degrees in the range [0,359] (default: 0).
     */
    twist?: integer;
    /**
     * Identifier used to track touch sources between events, must be unique within an event.
     */
    id?: number;
  }

  export const enum GestureSourceType {
    Default = 'default',
    Touch = 'touch',
    Mouse = 'mouse',
  }

  export const enum MouseButton {
    None = 'none',
    Left = 'left',
    Middle = 'middle',
    Right = 'right',
    Back = 'back',
    Forward = 'forward',
  }

  /**
   * UTC time in seconds, counted from January 1, 1970.
   */
  export type TimeSinceEpoch = number;

  export interface DragDataItem {
    /**
     * Mime type of the dragged data.
     */
    mimeType: string;
    /**
     * Depending of the value of `mimeType`, it contains the dragged link,
     * text, HTML markup or any other data.
     */
    data: string;
    /**
     * Title associated with a link. Only valid when `mimeType` == "text/uri-list".
     */
    title?: string;
    /**
     * Stores the base URL for the contained markup. Only valid when `mimeType`
     * == "text/html".
     */
    baseURL?: string;
  }

  export interface DragData {
    items: DragDataItem[];
    /**
     * List of filenames that should be included when dropping
     */
    files?: string[];
    /**
     * Bit field representing allowed drag operations. Copy = 1, Link = 2, Move = 16
     */
    dragOperationsMask: integer;
  }

  export const enum DispatchDragEventRequestType {
    DragEnter = 'dragEnter',
    DragOver = 'dragOver',
    Drop = 'drop',
    DragCancel = 'dragCancel',
  }

  export interface DispatchDragEventRequest {
    /**
     * Type of the drag event.
     */
    type: DispatchDragEventRequestType;
    /**
     * X coordinate of the event relative to the main frame's viewport in CSS pixels.
     */
    x: number;
    /**
     * Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
     * the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
     */
    y: number;
    data: DragData;
    /**
     * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
     * (default: 0).
     */
    modifiers?: integer;
  }

  export const enum DispatchKeyEventRequestType {
    KeyDown = 'keyDown',
    KeyUp = 'keyUp',
    RawKeyDown = 'rawKeyDown',
    Char = 'char',
  }

  export interface DispatchKeyEventRequest {
    /**
     * Type of the key event.
     */
    type: DispatchKeyEventRequestType;
    /**
     * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
     * (default: 0).
     */
    modifiers?: integer;
    /**
     * Time at which the event occurred.
     */
    timestamp?: TimeSinceEpoch;
    /**
     * Text as generated by processing a virtual key code with a keyboard layout. Not needed for
     * for `keyUp` and `rawKeyDown` events (default: "")
     */
    text?: string;
    /**
     * Text that would have been generated by the keyboard if no modifiers were pressed (except for
     * shift). Useful for shortcut (accelerator) key handling (default: "").
     */
    unmodifiedText?: string;
    /**
     * Unique key identifier (e.g., 'U+0041') (default: "").
     */
    keyIdentifier?: string;
    /**
     * Unique DOM defined string value for each physical key (e.g., 'KeyA') (default: "").
     */
    code?: string;
    /**
     * Unique DOM defined string value describing the meaning of the key in the context of active
     * modifiers, keyboard layout, etc (e.g., 'AltGr') (default: "").
     */
    key?: string;
    /**
     * Windows virtual key code (default: 0).
     */
    windowsVirtualKeyCode?: integer;
    /**
     * Native virtual key code (default: 0).
     */
    nativeVirtualKeyCode?: integer;
    /**
     * Whether the event was generated from auto repeat (default: false).
     */
    autoRepeat?: boolean;
    /**
     * Whether the event was generated from the keypad (default: false).
     */
    isKeypad?: boolean;
    /**
     * Whether the event was a system key event (default: false).
     */
    isSystemKey?: boolean;
    /**
     * Whether the event was from the left or right side of the keyboard. 1=Left, 2=Right (default:
     * 0).
     */
    location?: integer;
    /**
     * Editing commands to send with the key event (e.g., 'selectAll') (default: []).
     * These are related to but not equal the command names used in `document.execCommand` and NSStandardKeyBindingResponding.
     * See https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h for valid command names.
     */
    commands?: string[];
  }

  export interface InsertTextRequest {
    /**
     * The text to insert.
     */
    text: string;
  }

  export interface ImeSetCompositionRequest {
    /**
     * The text to insert
     */
    text: string;
    /**
     * selection start
     */
    selectionStart: integer;
    /**
     * selection end
     */
    selectionEnd: integer;
    /**
     * replacement start
     */
    replacementStart?: integer;
    /**
     * replacement end
     */
    replacementEnd?: integer;
  }

  export const enum DispatchMouseEventRequestType {
    MousePressed = 'mousePressed',
    MouseReleased = 'mouseReleased',
    MouseMoved = 'mouseMoved',
    MouseWheel = 'mouseWheel',
  }

  export const enum DispatchMouseEventRequestPointerType {
    Mouse = 'mouse',
    Pen = 'pen',
  }

  export interface DispatchMouseEventRequest {
    /**
     * Type of the mouse event.
     */
    type: DispatchMouseEventRequestType;
    /**
     * X coordinate of the event relative to the main frame's viewport in CSS pixels.
     */
    x: number;
    /**
     * Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
     * the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
     */
    y: number;
    /**
     * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
     * (default: 0).
     */
    modifiers?: integer;
    /**
     * Time at which the event occurred.
     */
    timestamp?: TimeSinceEpoch;
    /**
     * Mouse button (default: "none").
     */
    button?: MouseButton;
    /**
     * A number indicating which buttons are pressed on the mouse when a mouse event is triggered.
     * Left=1, Right=2, Middle=4, Back=8, Forward=16, None=0.
     */
    buttons?: integer;
    /**
     * Number of times the mouse button was clicked (default: 0).
     */
    clickCount?: integer;
    /**
     * The normalized pressure, which has a range of [0,1] (default: 0).
     */
    force?: number;
    /**
     * The normalized tangential pressure, which has a range of [-1,1] (default: 0).
     */
    tangentialPressure?: number;
    /**
     * The plane angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis, in degrees of the range [-90,90], a positive tiltX is to the right (default: 0).
     */
    tiltX?: integer;
    /**
     * The plane angle between the X-Z plane and the plane containing both the stylus axis and the X axis, in degrees of the range [-90,90], a positive tiltY is towards the user (default: 0).
     */
    tiltY?: integer;
    /**
     * The clockwise rotation of a pen stylus around its own major axis, in degrees in the range [0,359] (default: 0).
     */
    twist?: integer;
    /**
     * X delta in CSS pixels for mouse wheel event (default: 0).
     */
    deltaX?: number;
    /**
     * Y delta in CSS pixels for mouse wheel event (default: 0).
     */
    deltaY?: number;
    /**
     * Pointer type (default: "mouse").
     */
    pointerType?: DispatchMouseEventRequestPointerType;
  }

  export const enum DispatchTouchEventRequestType {
    TouchStart = 'touchStart',
    TouchEnd = 'touchEnd',
    TouchMove = 'touchMove',
    TouchCancel = 'touchCancel',
  }

  export interface DispatchTouchEventRequest {
    /**
     * Type of the touch event. TouchEnd and TouchCancel must not contain any touch points, while
     * TouchStart and TouchMove must contains at least one.
     */
    type: DispatchTouchEventRequestType;
    /**
     * Active touch points on the touch device. One event per any changed point (compared to
     * previous touch event in a sequence) is generated, emulating pressing/moving/releasing points
     * one by one.
     */
    touchPoints: TouchPoint[];
    /**
     * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
     * (default: 0).
     */
    modifiers?: integer;
    /**
     * Time at which the event occurred.
     */
    timestamp?: TimeSinceEpoch;
  }

  export const enum EmulateTouchFromMouseEventRequestType {
    MousePressed = 'mousePressed',
    MouseReleased = 'mouseReleased',
    MouseMoved = 'mouseMoved',
    MouseWheel = 'mouseWheel',
  }

  export interface EmulateTouchFromMouseEventRequest {
    /**
     * Type of the mouse event.
     */
    type: EmulateTouchFromMouseEventRequestType;
    /**
     * X coordinate of the mouse pointer in DIP.
     */
    x: integer;
    /**
     * Y coordinate of the mouse pointer in DIP.
     */
    y: integer;
    /**
     * Mouse button. Only "none", "left", "right" are supported.
     */
    button: MouseButton;
    /**
     * Time at which the event occurred (default: current time).
     */
    timestamp?: TimeSinceEpoch;
    /**
     * X delta in DIP for mouse wheel event (default: 0).
     */
    deltaX?: number;
    /**
     * Y delta in DIP for mouse wheel event (default: 0).
     */
    deltaY?: number;
    /**
     * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
     * (default: 0).
     */
    modifiers?: integer;
    /**
     * Number of times the mouse button was clicked (default: 0).
     */
    clickCount?: integer;
  }

  export interface SetIgnoreInputEventsRequest {
    /**
     * Ignores input events processing when set to true.
     */
    ignore: boolean;
  }

  export interface SetInterceptDragsRequest {
    enabled: boolean;
  }

  export interface SynthesizePinchGestureRequest {
    /**
     * X coordinate of the start of the gesture in CSS pixels.
     */
    x: number;
    /**
     * Y coordinate of the start of the gesture in CSS pixels.
     */
    y: number;
    /**
     * Relative scale factor after zooming (>1.0 zooms in, <1.0 zooms out).
     */
    scaleFactor: number;
    /**
     * Relative pointer speed in pixels per second (default: 800).
     */
    relativeSpeed?: integer;
    /**
     * Which type of input events to be generated (default: 'default', which queries the platform
     * for the preferred input type).
     */
    gestureSourceType?: GestureSourceType;
  }

  export interface SynthesizeScrollGestureRequest {
    /**
     * X coordinate of the start of the gesture in CSS pixels.
     */
    x: number;
    /**
     * Y coordinate of the start of the gesture in CSS pixels.
     */
    y: number;
    /**
     * The distance to scroll along the X axis (positive to scroll left).
     */
    xDistance?: number;
    /**
     * The distance to scroll along the Y axis (positive to scroll up).
     */
    yDistance?: number;
    /**
     * The number of additional pixels to scroll back along the X axis, in addition to the given
     * distance.
     */
    xOverscroll?: number;
    /**
     * The number of additional pixels to scroll back along the Y axis, in addition to the given
     * distance.
     */
    yOverscroll?: number;
    /**
     * Prevent fling (default: true).
     */
    preventFling?: boolean;
    /**
     * Swipe speed in pixels per second (default: 800).
     */
    speed?: integer;
    /**
     * Which type of input events to be generated (default: 'default', which queries the platform
     * for the preferred input type).
     */
    gestureSourceType?: GestureSourceType;
    /**
     * The number of times to repeat the gesture (default: 0).
     */
    repeatCount?: integer;
    /**
     * The number of milliseconds delay between each repeat. (default: 250).
     */
    repeatDelayMs?: integer;
    /**
     * The name of the interaction markers to generate, if not empty (default: "").
     */
    interactionMarkerName?: string;
  }

  export interface SynthesizeTapGestureRequest {
    /**
     * X coordinate of the start of the gesture in CSS pixels.
     */
    x: number;
    /**
     * Y coordinate of the start of the gesture in CSS pixels.
     */
    y: number;
    /**
     * Duration between touchdown and touchup events in ms (default: 50).
     */
    duration?: integer;
    /**
     * Number of times to perform the tap (e.g. 2 for double tap, default: 1).
     */
    tapCount?: integer;
    /**
     * Which type of input events to be generated (default: 'default', which queries the platform
     * for the preferred input type).
     */
    gestureSourceType?: GestureSourceType;
  }

  /**
   * Emitted only when `Input.setInterceptDrags` is enabled. Use this data with `Input.dispatchDragEvent` to
   * restore normal drag and drop behavior.
   */
  export interface DragInterceptedEvent {
    data: DragData;
  }
}

export namespace Inspector {

  /**
   * Fired when remote debugging connection is about to be terminated. Contains detach reason.
   */
  export interface DetachedEvent {
    /**
     * The reason why connection has been terminated.
     */
    reason: string;
  }
}

export namespace LayerTree {

  /**
   * Unique Layer identifier.
   */
  export type LayerId = OpaqueIdentifier<string, 'Protocol.LayerTree.LayerId'>;

  /**
   * Unique snapshot identifier.
   */
  export type SnapshotId = OpaqueIdentifier<string, 'Protocol.LayerTree.SnapshotId'>;

  export const enum ScrollRectType {
    RepaintsOnScroll = 'RepaintsOnScroll',
    TouchEventHandler = 'TouchEventHandler',
    WheelEventHandler = 'WheelEventHandler',
  }

  /**
   * Rectangle where scrolling happens on the main thread.
   */
  export interface ScrollRect {
    /**
     * Rectangle itself.
     */
    rect: DOM.Rect;
    /**
     * Reason for rectangle to force scrolling on the main thread
     */
    type: ScrollRectType;
  }

  /**
   * Sticky position constraints.
   */
  export interface StickyPositionConstraint {
    /**
     * Layout rectangle of the sticky element before being shifted
     */
    stickyBoxRect: DOM.Rect;
    /**
     * Layout rectangle of the containing block of the sticky element
     */
    containingBlockRect: DOM.Rect;
    /**
     * The nearest sticky layer that shifts the sticky box
     */
    nearestLayerShiftingStickyBox?: LayerId;
    /**
     * The nearest sticky layer that shifts the containing block
     */
    nearestLayerShiftingContainingBlock?: LayerId;
  }

  /**
   * Serialized fragment of layer picture along with its offset within the layer.
   */
  export interface PictureTile {
    /**
     * Offset from owning layer left boundary
     */
    x: number;
    /**
     * Offset from owning layer top boundary
     */
    y: number;
    /**
     * Base64-encoded snapshot data.
     */
    picture: binary;
  }

  /**
   * Information about a compositing layer.
   */
  export interface Layer {
    /**
     * The unique id for this layer.
     */
    layerId: LayerId;
    /**
     * The id of parent (not present for root).
     */
    parentLayerId?: LayerId;
    /**
     * The backend id for the node associated with this layer.
     */
    backendNodeId?: DOM.BackendNodeId;
    /**
     * Offset from parent layer, X coordinate.
     */
    offsetX: number;
    /**
     * Offset from parent layer, Y coordinate.
     */
    offsetY: number;
    /**
     * Layer width.
     */
    width: number;
    /**
     * Layer height.
     */
    height: number;
    /**
     * Transformation matrix for layer, default is identity matrix
     */
    transform?: number[];
    /**
     * Transform anchor point X, absent if no transform specified
     */
    anchorX?: number;
    /**
     * Transform anchor point Y, absent if no transform specified
     */
    anchorY?: number;
    /**
     * Transform anchor point Z, absent if no transform specified
     */
    anchorZ?: number;
    /**
     * Indicates how many time this layer has painted.
     */
    paintCount: integer;
    /**
     * Indicates whether this layer hosts any content, rather than being used for
     * transform/scrolling purposes only.
     */
    drawsContent: boolean;
    /**
     * Set if layer is not visible.
     */
    invisible?: boolean;
    /**
     * Rectangles scrolling on main thread only.
     */
    scrollRects?: ScrollRect[];
    /**
     * Sticky position constraint information
     */
    stickyPositionConstraint?: StickyPositionConstraint;
  }

  /**
   * Array of timings, one per paint step.
   */
  export type PaintProfile = number[];

  export interface CompositingReasonsRequest {
    /**
     * The id of the layer for which we want to get the reasons it was composited.
     */
    layerId: LayerId;
  }

  export interface CompositingReasonsResponse extends ProtocolResponseWithError {
    /**
     * A list of strings specifying reasons for the given layer to become composited.
     */
    compositingReasons: string[];
    /**
     * A list of strings specifying reason IDs for the given layer to become composited.
     */
    compositingReasonIds: string[];
  }

  export interface LoadSnapshotRequest {
    /**
     * An array of tiles composing the snapshot.
     */
    tiles: PictureTile[];
  }

  export interface LoadSnapshotResponse extends ProtocolResponseWithError {
    /**
     * The id of the snapshot.
     */
    snapshotId: SnapshotId;
  }

  export interface MakeSnapshotRequest {
    /**
     * The id of the layer.
     */
    layerId: LayerId;
  }

  export interface MakeSnapshotResponse extends ProtocolResponseWithError {
    /**
     * The id of the layer snapshot.
     */
    snapshotId: SnapshotId;
  }

  export interface ProfileSnapshotRequest {
    /**
     * The id of the layer snapshot.
     */
    snapshotId: SnapshotId;
    /**
     * The maximum number of times to replay the snapshot (1, if not specified).
     */
    minRepeatCount?: integer;
    /**
     * The minimum duration (in seconds) to replay the snapshot.
     */
    minDuration?: number;
    /**
     * The clip rectangle to apply when replaying the snapshot.
     */
    clipRect?: DOM.Rect;
  }

  export interface ProfileSnapshotResponse extends ProtocolResponseWithError {
    /**
     * The array of paint profiles, one per run.
     */
    timings: PaintProfile[];
  }

  export interface ReleaseSnapshotRequest {
    /**
     * The id of the layer snapshot.
     */
    snapshotId: SnapshotId;
  }

  export interface ReplaySnapshotRequest {
    /**
     * The id of the layer snapshot.
     */
    snapshotId: SnapshotId;
    /**
     * The first step to replay from (replay from the very start if not specified).
     */
    fromStep?: integer;
    /**
     * The last step to replay to (replay till the end if not specified).
     */
    toStep?: integer;
    /**
     * The scale to apply while replaying (defaults to 1).
     */
    scale?: number;
  }

  export interface ReplaySnapshotResponse extends ProtocolResponseWithError {
    /**
     * A data: URL for resulting image.
     */
    dataURL: string;
  }

  export interface SnapshotCommandLogRequest {
    /**
     * The id of the layer snapshot.
     */
    snapshotId: SnapshotId;
  }

  export interface SnapshotCommandLogResponse extends ProtocolResponseWithError {
    /**
     * The array of canvas function calls.
     */
    commandLog: any[];
  }

  export interface LayerPaintedEvent {
    /**
     * The id of the painted layer.
     */
    layerId: LayerId;
    /**
     * Clip rectangle.
     */
    clip: DOM.Rect;
  }

  export interface LayerTreeDidChangeEvent {
    /**
     * Layer tree, absent if not in the comspositing mode.
     */
    layers?: Layer[];
  }
}

/**
 * Provides access to log entries.
 */
export namespace Log {

  export const enum LogEntrySource {
    XML = 'xml',
    Javascript = 'javascript',
    Network = 'network',
    Storage = 'storage',
    Appcache = 'appcache',
    Rendering = 'rendering',
    Security = 'security',
    Deprecation = 'deprecation',
    Worker = 'worker',
    Violation = 'violation',
    Intervention = 'intervention',
    Recommendation = 'recommendation',
    Other = 'other',
  }

  export const enum LogEntryLevel {
    Verbose = 'verbose',
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
  }

  export const enum LogEntryCategory {
    Cors = 'cors',
  }

  /**
   * Log entry.
   */
  export interface LogEntry {
    /**
     * Log entry source.
     */
    source: LogEntrySource;
    /**
     * Log entry severity.
     */
    level: LogEntryLevel;
    /**
     * Logged text.
     */
    text: string;
    category?: LogEntryCategory;
    /**
     * Timestamp when this entry was added.
     */
    timestamp: Runtime.Timestamp;
    /**
     * URL of the resource if known.
     */
    url?: string;
    /**
     * Line number in the resource.
     */
    lineNumber?: integer;
    /**
     * JavaScript stack trace.
     */
    stackTrace?: Runtime.StackTrace;
    /**
     * Identifier of the network request associated with this entry.
     */
    networkRequestId?: Network.RequestId;
    /**
     * Identifier of the worker associated with this entry.
     */
    workerId?: string;
    /**
     * Call arguments.
     */
    args?: Runtime.RemoteObject[];
  }

  export const enum ViolationSettingName {
    LongTask = 'longTask',
    LongLayout = 'longLayout',
    BlockedEvent = 'blockedEvent',
    BlockedParser = 'blockedParser',
    DiscouragedAPIUse = 'discouragedAPIUse',
    Handler = 'handler',
    RecurringHandler = 'recurringHandler',
  }

  /**
   * Violation configuration setting.
   */
  export interface ViolationSetting {
    /**
     * Violation type.
     */
    name: ViolationSettingName;
    /**
     * Time threshold to trigger upon.
     */
    threshold: number;
  }

  export interface StartViolationsReportRequest {
    /**
     * Configuration for violations.
     */
    config: ViolationSetting[];
  }

  /**
   * Issued when new message was logged.
   */
  export interface EntryAddedEvent {
    /**
     * The entry.
     */
    entry: LogEntry;
  }
}

export namespace Memory {

  /**
   * Memory pressure level.
   */
  export const enum PressureLevel {
    Moderate = 'moderate',
    Critical = 'critical',
  }

  /**
   * Heap profile sample.
   */
  export interface SamplingProfileNode {
    /**
     * Size of the sampled allocation.
     */
    size: number;
    /**
     * Total bytes attributed to this sample.
     */
    total: number;
    /**
     * Execution stack at the point of allocation.
     */
    stack: string[];
  }

  /**
   * Array of heap profile samples.
   */
  export interface SamplingProfile {
    samples: SamplingProfileNode[];
    modules: Module[];
  }

  /**
   * Executable module information
   */
  export interface Module {
    /**
     * Name of the module.
     */
    name: string;
    /**
     * UUID of the module.
     */
    uuid: string;
    /**
     * Base address where the module is loaded into memory. Encoded as a decimal
     * or hexadecimal (0x prefixed) string.
     */
    baseAddress: string;
    /**
     * Size of the module in bytes.
     */
    size: number;
  }

  export interface GetDOMCountersResponse extends ProtocolResponseWithError {
    documents: integer;
    nodes: integer;
    jsEventListeners: integer;
  }

  export interface SetPressureNotificationsSuppressedRequest {
    /**
     * If true, memory pressure notifications will be suppressed.
     */
    suppressed: boolean;
  }

  export interface SimulatePressureNotificationRequest {
    /**
     * Memory pressure level of the notification.
     */
    level: PressureLevel;
  }

  export interface StartSamplingRequest {
    /**
     * Average number of bytes between samples.
     */
    samplingInterval?: integer;
    /**
     * Do not randomize intervals between samples.
     */
    suppressRandomness?: boolean;
  }

  export interface GetAllTimeSamplingProfileResponse extends ProtocolResponseWithError {
    profile: SamplingProfile;
  }

  export interface GetBrowserSamplingProfileResponse extends ProtocolResponseWithError {
    profile: SamplingProfile;
  }

  export interface GetSamplingProfileResponse extends ProtocolResponseWithError {
    profile: SamplingProfile;
  }
}

/**
 * Network domain allows tracking network activities of the page. It exposes information about http,
 * file, data and other requests and responses, their headers, bodies, timing, etc.
 */
export namespace Network {

  /**
   * Resource type as it was perceived by the rendering engine.
   */
  export const enum ResourceType {
    Document = 'Document',
    Stylesheet = 'Stylesheet',
    Image = 'Image',
    Media = 'Media',
    Font = 'Font',
    Script = 'Script',
    TextTrack = 'TextTrack',
    XHR = 'XHR',
    Fetch = 'Fetch',
    Prefetch = 'Prefetch',
    EventSource = 'EventSource',
    WebSocket = 'WebSocket',
    Manifest = 'Manifest',
    SignedExchange = 'SignedExchange',
    Ping = 'Ping',
    CSPViolationReport = 'CSPViolationReport',
    Preflight = 'Preflight',
    Other = 'Other',
  }

  /**
   * Unique loader identifier.
   */
  export type LoaderId = OpaqueIdentifier<string, 'Protocol.Network.LoaderId'>;

  /**
   * Unique request identifier.
   */
  export type RequestId = OpaqueIdentifier<string, 'Protocol.Network.RequestId'>;

  /**
   * Unique intercepted request identifier.
   */
  export type InterceptionId = OpaqueIdentifier<string, 'Protocol.Network.InterceptionId'>;

  /**
   * Network level fetch failure reason.
   */
  export const enum ErrorReason {
    Failed = 'Failed',
    Aborted = 'Aborted',
    TimedOut = 'TimedOut',
    AccessDenied = 'AccessDenied',
    ConnectionClosed = 'ConnectionClosed',
    ConnectionReset = 'ConnectionReset',
    ConnectionRefused = 'ConnectionRefused',
    ConnectionAborted = 'ConnectionAborted',
    ConnectionFailed = 'ConnectionFailed',
    NameNotResolved = 'NameNotResolved',
    InternetDisconnected = 'InternetDisconnected',
    AddressUnreachable = 'AddressUnreachable',
    BlockedByClient = 'BlockedByClient',
    BlockedByResponse = 'BlockedByResponse',
  }

  /**
   * UTC time in seconds, counted from January 1, 1970.
   */
  export type TimeSinceEpoch = number;

  /**
   * Monotonically increasing time in seconds since an arbitrary point in the past.
   */
  export type MonotonicTime = number;

  /**
   * Request / response headers as keys / values of JSON object.
   */
  export interface Headers {
    [key: string]: string;
  }

  /**
   * The underlying connection technology that the browser is supposedly using.
   */
  export const enum ConnectionType {
    None = 'none',
    Cellular2g = 'cellular2g',
    Cellular3g = 'cellular3g',
    Cellular4g = 'cellular4g',
    Bluetooth = 'bluetooth',
    Ethernet = 'ethernet',
    Wifi = 'wifi',
    Wimax = 'wimax',
    Other = 'other',
  }

  /**
   * Represents the cookie's 'SameSite' status:
   * https://tools.ietf.org/html/draft-west-first-party-cookies
   */
  export const enum CookieSameSite {
    Strict = 'Strict',
    Lax = 'Lax',
    None = 'None',
  }

  /**
   * Represents the cookie's 'Priority' status:
   * https://tools.ietf.org/html/draft-west-cookie-priority-00
   */
  export const enum CookiePriority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
  }

  /**
   * Represents the source scheme of the origin that originally set the cookie.
   * A value of "Unset" allows protocol clients to emulate legacy cookie scope for the scheme.
   * This is a temporary ability and it will be removed in the future.
   */
  export const enum CookieSourceScheme {
    Unset = 'Unset',
    NonSecure = 'NonSecure',
    Secure = 'Secure',
  }

  /**
   * Timing information for the request.
   */
  export interface ResourceTiming {
    /**
     * Timing's requestTime is a baseline in seconds, while the other numbers are ticks in
     * milliseconds relatively to this requestTime.
     */
    requestTime: number;
    /**
     * Started resolving proxy.
     */
    proxyStart: number;
    /**
     * Finished resolving proxy.
     */
    proxyEnd: number;
    /**
     * Started DNS address resolve.
     */
    dnsStart: number;
    /**
     * Finished DNS address resolve.
     */
    dnsEnd: number;
    /**
     * Started connecting to the remote host.
     */
    connectStart: number;
    /**
     * Connected to the remote host.
     */
    connectEnd: number;
    /**
     * Started SSL handshake.
     */
    sslStart: number;
    /**
     * Finished SSL handshake.
     */
    sslEnd: number;
    /**
     * Started running ServiceWorker.
     */
    workerStart: number;
    /**
     * Finished Starting ServiceWorker.
     */
    workerReady: number;
    /**
     * Started fetch event.
     */
    workerFetchStart: number;
    /**
     * Settled fetch event respondWith promise.
     */
    workerRespondWithSettled: number;
    /**
     * Started sending request.
     */
    sendStart: number;
    /**
     * Finished sending request.
     */
    sendEnd: number;
    /**
     * Time the server started pushing request.
     */
    pushStart: number;
    /**
     * Time the server finished pushing request.
     */
    pushEnd: number;
    /**
     * Finished receiving response headers.
     */
    receiveHeadersEnd: number;
  }

  /**
   * Loading priority of a resource request.
   */
  export const enum ResourcePriority {
    VeryLow = 'VeryLow',
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
    VeryHigh = 'VeryHigh',
  }

  /**
   * Post data entry for HTTP request
   */
  export interface PostDataEntry {
    bytes?: binary;
  }

  export const enum RequestReferrerPolicy {
    UnsafeUrl = 'unsafe-url',
    NoReferrerWhenDowngrade = 'no-referrer-when-downgrade',
    NoReferrer = 'no-referrer',
    Origin = 'origin',
    OriginWhenCrossOrigin = 'origin-when-cross-origin',
    SameOrigin = 'same-origin',
    StrictOrigin = 'strict-origin',
    StrictOriginWhenCrossOrigin = 'strict-origin-when-cross-origin',
  }

  /**
   * HTTP request data.
   */
  export interface Request {
    /**
     * Request URL (without fragment).
     */
    url: string;
    /**
     * Fragment of the requested URL starting with hash, if present.
     */
    urlFragment?: string;
    /**
     * HTTP request method.
     */
    method: string;
    /**
     * HTTP request headers.
     */
    headers: Headers;
    /**
     * HTTP POST request data.
     */
    postData?: string;
    /**
     * True when the request has POST data. Note that postData might still be omitted when this flag is true when the data is too long.
     */
    hasPostData?: boolean;
    /**
     * Request body elements. This will be converted from base64 to binary
     */
    postDataEntries?: PostDataEntry[];
    /**
     * The mixed content type of the request.
     */
    mixedContentType?: Security.MixedContentType;
    /**
     * Priority of the resource request at the time request is sent.
     */
    initialPriority: ResourcePriority;
    /**
     * The referrer policy of the request, as defined in https://www.w3.org/TR/referrer-policy/
     */
    referrerPolicy: RequestReferrerPolicy;
    /**
     * Whether is loaded via link preload.
     */
    isLinkPreload?: boolean;
    /**
     * Set for requests when the TrustToken API is used. Contains the parameters
     * passed by the developer (e.g. via "fetch") as understood by the backend.
     */
    trustTokenParams?: TrustTokenParams;
    /**
     * True if this resource request is considered to be the 'same site' as the
     * request correspondinfg to the main frame.
     */
    isSameSite?: boolean;
  }

  /**
   * Details of a signed certificate timestamp (SCT).
   */
  export interface SignedCertificateTimestamp {
    /**
     * Validation status.
     */
    status: string;
    /**
     * Origin.
     */
    origin: string;
    /**
     * Log name / description.
     */
    logDescription: string;
    /**
     * Log ID.
     */
    logId: string;
    /**
     * Issuance date. Unlike TimeSinceEpoch, this contains the number of
     * milliseconds since January 1, 1970, UTC, not the number of seconds.
     */
    timestamp: number;
    /**
     * Hash algorithm.
     */
    hashAlgorithm: string;
    /**
     * Signature algorithm.
     */
    signatureAlgorithm: string;
    /**
     * Signature data.
     */
    signatureData: string;
  }

  /**
   * Security details about a request.
   */
  export interface SecurityDetails {
    /**
     * Protocol name (e.g. "TLS 1.2" or "QUIC").
     */
    protocol: string;
    /**
     * Key Exchange used by the connection, or the empty string if not applicable.
     */
    keyExchange: string;
    /**
     * (EC)DH group used by the connection, if applicable.
     */
    keyExchangeGroup?: string;
    /**
     * Cipher name.
     */
    cipher: string;
    /**
     * TLS MAC. Note that AEAD ciphers do not have separate MACs.
     */
    mac?: string;
    /**
     * Certificate ID value.
     */
    certificateId: Security.CertificateId;
    /**
     * Certificate subject name.
     */
    subjectName: string;
    /**
     * Subject Alternative Name (SAN) DNS names and IP addresses.
     */
    sanList: string[];
    /**
     * Name of the issuing CA.
     */
    issuer: string;
    /**
     * Certificate valid from date.
     */
    validFrom: TimeSinceEpoch;
    /**
     * Certificate valid to (expiration) date
     */
    validTo: TimeSinceEpoch;
    /**
     * List of signed certificate timestamps (SCTs).
     */
    signedCertificateTimestampList: SignedCertificateTimestamp[];
    /**
     * Whether the request complied with Certificate Transparency policy
     */
    certificateTransparencyCompliance: CertificateTransparencyCompliance;
    /**
     * The signature algorithm used by the server in the TLS server signature,
     * represented as a TLS SignatureScheme code point. Omitted if not
     * applicable or not known.
     */
    serverSignatureAlgorithm?: integer;
    /**
     * Whether the connection used Encrypted ClientHello
     */
    encryptedClientHello: boolean;
  }

  /**
   * Whether the request complied with Certificate Transparency policy.
   */
  export const enum CertificateTransparencyCompliance {
    Unknown = 'unknown',
    NotCompliant = 'not-compliant',
    Compliant = 'compliant',
  }

  /**
   * The reason why request was blocked.
   */
  export const enum BlockedReason {
    Other = 'other',
    Csp = 'csp',
    MixedContent = 'mixed-content',
    Origin = 'origin',
    Inspector = 'inspector',
    SubresourceFilter = 'subresource-filter',
    ContentType = 'content-type',
    CoepFrameResourceNeedsCoepHeader = 'coep-frame-resource-needs-coep-header',
    CoopSandboxedIframeCannotNavigateToCoopPage = 'coop-sandboxed-iframe-cannot-navigate-to-coop-page',
    CorpNotSameOrigin = 'corp-not-same-origin',
    CorpNotSameOriginAfterDefaultedToSameOriginByCoep = 'corp-not-same-origin-after-defaulted-to-same-origin-by-coep',
    CorpNotSameSite = 'corp-not-same-site',
  }

  /**
   * The reason why request was blocked.
   */
  export const enum CorsError {
    DisallowedByMode = 'DisallowedByMode',
    InvalidResponse = 'InvalidResponse',
    WildcardOriginNotAllowed = 'WildcardOriginNotAllowed',
    MissingAllowOriginHeader = 'MissingAllowOriginHeader',
    MultipleAllowOriginValues = 'MultipleAllowOriginValues',
    InvalidAllowOriginValue = 'InvalidAllowOriginValue',
    AllowOriginMismatch = 'AllowOriginMismatch',
    InvalidAllowCredentials = 'InvalidAllowCredentials',
    CorsDisabledScheme = 'CorsDisabledScheme',
    PreflightInvalidStatus = 'PreflightInvalidStatus',
    PreflightDisallowedRedirect = 'PreflightDisallowedRedirect',
    PreflightWildcardOriginNotAllowed = 'PreflightWildcardOriginNotAllowed',
    PreflightMissingAllowOriginHeader = 'PreflightMissingAllowOriginHeader',
    PreflightMultipleAllowOriginValues = 'PreflightMultipleAllowOriginValues',
    PreflightInvalidAllowOriginValue = 'PreflightInvalidAllowOriginValue',
    PreflightAllowOriginMismatch = 'PreflightAllowOriginMismatch',
    PreflightInvalidAllowCredentials = 'PreflightInvalidAllowCredentials',
    PreflightMissingAllowExternal = 'PreflightMissingAllowExternal',
    PreflightInvalidAllowExternal = 'PreflightInvalidAllowExternal',
    PreflightMissingAllowPrivateNetwork = 'PreflightMissingAllowPrivateNetwork',
    PreflightInvalidAllowPrivateNetwork = 'PreflightInvalidAllowPrivateNetwork',
    InvalidAllowMethodsPreflightResponse = 'InvalidAllowMethodsPreflightResponse',
    InvalidAllowHeadersPreflightResponse = 'InvalidAllowHeadersPreflightResponse',
    MethodDisallowedByPreflightResponse = 'MethodDisallowedByPreflightResponse',
    HeaderDisallowedByPreflightResponse = 'HeaderDisallowedByPreflightResponse',
    RedirectContainsCredentials = 'RedirectContainsCredentials',
    InsecurePrivateNetwork = 'InsecurePrivateNetwork',
    InvalidPrivateNetworkAccess = 'InvalidPrivateNetworkAccess',
    UnexpectedPrivateNetworkAccess = 'UnexpectedPrivateNetworkAccess',
    NoCorsRedirectModeNotFollow = 'NoCorsRedirectModeNotFollow',
  }

  export interface CorsErrorStatus {
    corsError: CorsError;
    failedParameter: string;
  }

  /**
   * Source of serviceworker response.
   */
  export const enum ServiceWorkerResponseSource {
    CacheStorage = 'cache-storage',
    HttpCache = 'http-cache',
    FallbackCode = 'fallback-code',
    Network = 'network',
  }

  export const enum TrustTokenParamsRefreshPolicy {
    UseCached = 'UseCached',
    Refresh = 'Refresh',
  }

  /**
   * Determines what type of Trust Token operation is executed and
   * depending on the type, some additional parameters. The values
   * are specified in third_party/blink/renderer/core/fetch/trust_token.idl.
   */
  export interface TrustTokenParams {
    type: TrustTokenOperationType;
    /**
     * Only set for "token-redemption" type and determine whether
     * to request a fresh SRR or use a still valid cached SRR.
     */
    refreshPolicy: TrustTokenParamsRefreshPolicy;
    /**
     * Origins of issuers from whom to request tokens or redemption
     * records.
     */
    issuers?: string[];
  }

  export const enum TrustTokenOperationType {
    Issuance = 'Issuance',
    Redemption = 'Redemption',
    Signing = 'Signing',
  }

  /**
   * HTTP response data.
   */
  export interface Response {
    /**
     * Response URL. This URL can be different from CachedResource.url in case of redirect.
     */
    url: string;
    /**
     * HTTP response status code.
     */
    status: integer;
    /**
     * HTTP response status text.
     */
    statusText: string;
    /**
     * HTTP response headers.
     */
    headers: Headers;
    /**
     * HTTP response headers text. This has been replaced by the headers in Network.responseReceivedExtraInfo.
     */
    headersText?: string;
    /**
     * Resource mimeType as determined by the browser.
     */
    mimeType: string;
    /**
     * Refined HTTP request headers that were actually transmitted over the network.
     */
    requestHeaders?: Headers;
    /**
     * HTTP request headers text. This has been replaced by the headers in Network.requestWillBeSentExtraInfo.
     */
    requestHeadersText?: string;
    /**
     * Specifies whether physical connection was actually reused for this request.
     */
    connectionReused: boolean;
    /**
     * Physical connection id that was actually used for this request.
     */
    connectionId: number;
    /**
     * Remote IP address.
     */
    remoteIPAddress?: string;
    /**
     * Remote port.
     */
    remotePort?: integer;
    /**
     * Specifies that the request was served from the disk cache.
     */
    fromDiskCache?: boolean;
    /**
     * Specifies that the request was served from the ServiceWorker.
     */
    fromServiceWorker?: boolean;
    /**
     * Specifies that the request was served from the prefetch cache.
     */
    fromPrefetchCache?: boolean;
    /**
     * Total number of bytes received for this request so far.
     */
    encodedDataLength: number;
    /**
     * Timing information for the given request.
     */
    timing?: ResourceTiming;
    /**
     * Response source of response from ServiceWorker.
     */
    serviceWorkerResponseSource?: ServiceWorkerResponseSource;
    /**
     * The time at which the returned response was generated.
     */
    responseTime?: TimeSinceEpoch;
    /**
     * Cache Storage Cache Name.
     */
    cacheStorageCacheName?: string;
    /**
     * Protocol used to fetch this request.
     */
    protocol?: string;
    /**
     * Security state of the request resource.
     */
    securityState: Security.SecurityState;
    /**
     * Security details for the request.
     */
    securityDetails?: SecurityDetails;
  }

  /**
   * WebSocket request data.
   */
  export interface WebSocketRequest {
    /**
     * HTTP request headers.
     */
    headers: Headers;
  }

  /**
   * WebSocket response data.
   */
  export interface WebSocketResponse {
    /**
     * HTTP response status code.
     */
    status: integer;
    /**
     * HTTP response status text.
     */
    statusText: string;
    /**
     * HTTP response headers.
     */
    headers: Headers;
    /**
     * HTTP response headers text.
     */
    headersText?: string;
    /**
     * HTTP request headers.
     */
    requestHeaders?: Headers;
    /**
     * HTTP request headers text.
     */
    requestHeadersText?: string;
  }

  /**
   * WebSocket message data. This represents an entire WebSocket message, not just a fragmented frame as the name suggests.
   */
  export interface WebSocketFrame {
    /**
     * WebSocket message opcode.
     */
    opcode: number;
    /**
     * WebSocket message mask.
     */
    mask: boolean;
    /**
     * WebSocket message payload data.
     * If the opcode is 1, this is a text message and payloadData is a UTF-8 string.
     * If the opcode isn't 1, then payloadData is a base64 encoded string representing binary data.
     */
    payloadData: string;
  }

  /**
   * Information about the cached resource.
   */
  export interface CachedResource {
    /**
     * Resource URL. This is the url of the original network request.
     */
    url: string;
    /**
     * Type of this resource.
     */
    type: ResourceType;
    /**
     * Cached response data.
     */
    response?: Response;
    /**
     * Cached response body size.
     */
    bodySize: number;
  }

  export const enum InitiatorType {
    Parser = 'parser',
    Script = 'script',
    Preload = 'preload',
    SignedExchange = 'SignedExchange',
    Preflight = 'preflight',
    Other = 'other',
  }

  /**
   * Information about the request initiator.
   */
  export interface Initiator {
    /**
     * Type of this initiator.
     */
    type: InitiatorType;
    /**
     * Initiator JavaScript stack trace, set for Script only.
     */
    stack?: Runtime.StackTrace;
    /**
     * Initiator URL, set for Parser type or for Script type (when script is importing module) or for SignedExchange type.
     */
    url?: string;
    /**
     * Initiator line number, set for Parser type or for Script type (when script is importing
     * module) (0-based).
     */
    lineNumber?: number;
    /**
     * Initiator column number, set for Parser type or for Script type (when script is importing
     * module) (0-based).
     */
    columnNumber?: number;
    /**
     * Set if another request triggered this request (e.g. preflight).
     */
    requestId?: RequestId;
  }

  /**
   * Cookie object
   */
  export interface Cookie {
    /**
     * Cookie name.
     */
    name: string;
    /**
     * Cookie value.
     */
    value: string;
    /**
     * Cookie domain.
     */
    domain: string;
    /**
     * Cookie path.
     */
    path: string;
    /**
     * Cookie expiration date as the number of seconds since the UNIX epoch.
     */
    expires: number;
    /**
     * Cookie size.
     */
    size: integer;
    /**
     * True if cookie is http-only.
     */
    httpOnly: boolean;
    /**
     * True if cookie is secure.
     */
    secure: boolean;
    /**
     * True in case of session cookie.
     */
    session: boolean;
    /**
     * Cookie SameSite type.
     */
    sameSite?: CookieSameSite;
    /**
     * Cookie Priority
     */
    priority: CookiePriority;
    /**
     * True if cookie is SameParty.
     */
    sameParty: boolean;
    /**
     * Cookie source scheme type.
     */
    sourceScheme: CookieSourceScheme;
    /**
     * Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.
     * An unspecified port value allows protocol clients to emulate legacy cookie scope for the port.
     * This is a temporary ability and it will be removed in the future.
     */
    sourcePort: integer;
    /**
     * Cookie partition key. The site of the top-level URL the browser was visiting at the start
     * of the request to the endpoint that set the cookie.
     */
    partitionKey?: string;
    /**
     * True if cookie partition key is opaque.
     */
    partitionKeyOpaque?: boolean;
  }

  /**
   * Types of reasons why a cookie may not be stored from a response.
   */
  export const enum SetCookieBlockedReason {
    SecureOnly = 'SecureOnly',
    SameSiteStrict = 'SameSiteStrict',
    SameSiteLax = 'SameSiteLax',
    SameSiteUnspecifiedTreatedAsLax = 'SameSiteUnspecifiedTreatedAsLax',
    SameSiteNoneInsecure = 'SameSiteNoneInsecure',
    UserPreferences = 'UserPreferences',
    SyntaxError = 'SyntaxError',
    SchemeNotSupported = 'SchemeNotSupported',
    OverwriteSecure = 'OverwriteSecure',
    InvalidDomain = 'InvalidDomain',
    InvalidPrefix = 'InvalidPrefix',
    UnknownError = 'UnknownError',
    SchemefulSameSiteStrict = 'SchemefulSameSiteStrict',
    SchemefulSameSiteLax = 'SchemefulSameSiteLax',
    SchemefulSameSiteUnspecifiedTreatedAsLax = 'SchemefulSameSiteUnspecifiedTreatedAsLax',
    SamePartyFromCrossPartyContext = 'SamePartyFromCrossPartyContext',
    SamePartyConflictsWithOtherAttributes = 'SamePartyConflictsWithOtherAttributes',
    NameValuePairExceedsMaxSize = 'NameValuePairExceedsMaxSize',
  }

  /**
   * Types of reasons why a cookie may not be sent with a request.
   */
  export const enum CookieBlockedReason {
    SecureOnly = 'SecureOnly',
    NotOnPath = 'NotOnPath',
    DomainMismatch = 'DomainMismatch',
    SameSiteStrict = 'SameSiteStrict',
    SameSiteLax = 'SameSiteLax',
    SameSiteUnspecifiedTreatedAsLax = 'SameSiteUnspecifiedTreatedAsLax',
    SameSiteNoneInsecure = 'SameSiteNoneInsecure',
    UserPreferences = 'UserPreferences',
    UnknownError = 'UnknownError',
    SchemefulSameSiteStrict = 'SchemefulSameSiteStrict',
    SchemefulSameSiteLax = 'SchemefulSameSiteLax',
    SchemefulSameSiteUnspecifiedTreatedAsLax = 'SchemefulSameSiteUnspecifiedTreatedAsLax',
    SamePartyFromCrossPartyContext = 'SamePartyFromCrossPartyContext',
    NameValuePairExceedsMaxSize = 'NameValuePairExceedsMaxSize',
  }

  /**
   * A cookie which was not stored from a response with the corresponding reason.
   */
  export interface BlockedSetCookieWithReason {
    /**
     * The reason(s) this cookie was blocked.
     */
    blockedReasons: SetCookieBlockedReason[];
    /**
     * The string representing this individual cookie as it would appear in the header.
     * This is not the entire "cookie" or "set-cookie" header which could have multiple cookies.
     */
    cookieLine: string;
    /**
     * The cookie object which represents the cookie which was not stored. It is optional because
     * sometimes complete cookie information is not available, such as in the case of parsing
     * errors.
     */
    cookie?: Cookie;
  }

  /**
   * A cookie with was not sent with a request with the corresponding reason.
   */
  export interface BlockedCookieWithReason {
    /**
     * The reason(s) the cookie was blocked.
     */
    blockedReasons: CookieBlockedReason[];
    /**
     * The cookie object representing the cookie which was not sent.
     */
    cookie: Cookie;
  }

  /**
   * Cookie parameter object
   */
  export interface CookieParam {
    /**
     * Cookie name.
     */
    name: string;
    /**
     * Cookie value.
     */
    value: string;
    /**
     * The request-URI to associate with the setting of the cookie. This value can affect the
     * default domain, path, source port, and source scheme values of the created cookie.
     */
    url?: string;
    /**
     * Cookie domain.
     */
    domain?: string;
    /**
     * Cookie path.
     */
    path?: string;
    /**
     * True if cookie is secure.
     */
    secure?: boolean;
    /**
     * True if cookie is http-only.
     */
    httpOnly?: boolean;
    /**
     * Cookie SameSite type.
     */
    sameSite?: CookieSameSite;
    /**
     * Cookie expiration date, session cookie if not set
     */
    expires?: TimeSinceEpoch;
    /**
     * Cookie Priority.
     */
    priority?: CookiePriority;
    /**
     * True if cookie is SameParty.
     */
    sameParty?: boolean;
    /**
     * Cookie source scheme type.
     */
    sourceScheme?: CookieSourceScheme;
    /**
     * Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.
     * An unspecified port value allows protocol clients to emulate legacy cookie scope for the port.
     * This is a temporary ability and it will be removed in the future.
     */
    sourcePort?: integer;
    /**
     * Cookie partition key. The site of the top-level URL the browser was visiting at the start
     * of the request to the endpoint that set the cookie.
     * If not set, the cookie will be set as not partitioned.
     */
    partitionKey?: string;
  }

  export const enum AuthChallengeSource {
    Server = 'Server',
    Proxy = 'Proxy',
  }

  /**
   * Authorization challenge for HTTP status code 401 or 407.
   */
  export interface AuthChallenge {
    /**
     * Source of the authentication challenge.
     */
    source?: AuthChallengeSource;
    /**
     * Origin of the challenger.
     */
    origin: string;
    /**
     * The authentication scheme used, such as basic or digest
     */
    scheme: string;
    /**
     * The realm of the challenge. May be empty.
     */
    realm: string;
  }

  export const enum AuthChallengeResponseResponse {
    Default = 'Default',
    CancelAuth = 'CancelAuth',
    ProvideCredentials = 'ProvideCredentials',
  }

  /**
   * Response to an AuthChallenge.
   */
  export interface AuthChallengeResponse {
    /**
     * The decision on what to do in response to the authorization challenge.  Default means
     * deferring to the default behavior of the net stack, which will likely either the Cancel
     * authentication or display a popup dialog box.
     */
    response: AuthChallengeResponseResponse;
    /**
     * The username to provide, possibly empty. Should only be set if response is
     * ProvideCredentials.
     */
    username?: string;
    /**
     * The password to provide, possibly empty. Should only be set if response is
     * ProvideCredentials.
     */
    password?: string;
  }

  /**
   * Stages of the interception to begin intercepting. Request will intercept before the request is
   * sent. Response will intercept after the response is received.
   */
  export const enum InterceptionStage {
    Request = 'Request',
    HeadersReceived = 'HeadersReceived',
  }

  /**
   * Request pattern for interception.
   */
  export interface RequestPattern {
    /**
     * Wildcards (`'*'` -> zero or more, `'?'` -> exactly one) are allowed. Escape character is
     * backslash. Omitting is equivalent to `"*"`.
     */
    urlPattern?: string;
    /**
     * If set, only requests for matching resource types will be intercepted.
     */
    resourceType?: ResourceType;
    /**
     * Stage at which to begin intercepting requests. Default is Request.
     */
    interceptionStage?: InterceptionStage;
  }

  /**
   * Information about a signed exchange signature.
   * https://wicg.github.io/webpackage/draft-yasskin-httpbis-origin-signed-exchanges-impl.html#rfc.section.3.1
   */
  export interface SignedExchangeSignature {
    /**
     * Signed exchange signature label.
     */
    label: string;
    /**
     * The hex string of signed exchange signature.
     */
    signature: string;
    /**
     * Signed exchange signature integrity.
     */
    integrity: string;
    /**
     * Signed exchange signature cert Url.
     */
    certUrl?: string;
    /**
     * The hex string of signed exchange signature cert sha256.
     */
    certSha256?: string;
    /**
     * Signed exchange signature validity Url.
     */
    validityUrl: string;
    /**
     * Signed exchange signature date.
     */
    date: integer;
    /**
     * Signed exchange signature expires.
     */
    expires: integer;
    /**
     * The encoded certificates.
     */
    certificates?: string[];
  }

  /**
   * Information about a signed exchange header.
   * https://wicg.github.io/webpackage/draft-yasskin-httpbis-origin-signed-exchanges-impl.html#cbor-representation
   */
  export interface SignedExchangeHeader {
    /**
     * Signed exchange request URL.
     */
    requestUrl: string;
    /**
     * Signed exchange response code.
     */
    responseCode: integer;
    /**
     * Signed exchange response headers.
     */
    responseHeaders: Headers;
    /**
     * Signed exchange response signature.
     */
    signatures: SignedExchangeSignature[];
    /**
     * Signed exchange header integrity hash in the form of "sha256-<base64-hash-value>".
     */
    headerIntegrity: string;
  }

  /**
   * Field type for a signed exchange related error.
   */
  export const enum SignedExchangeErrorField {
    SignatureSig = 'signatureSig',
    SignatureIntegrity = 'signatureIntegrity',
    SignatureCertUrl = 'signatureCertUrl',
    SignatureCertSha256 = 'signatureCertSha256',
    SignatureValidityUrl = 'signatureValidityUrl',
    SignatureTimestamps = 'signatureTimestamps',
  }

  /**
   * Information about a signed exchange response.
   */
  export interface SignedExchangeError {
    /**
     * Error message.
     */
    message: string;
    /**
     * The index of the signature which caused the error.
     */
    signatureIndex?: integer;
    /**
     * The field which caused the error.
     */
    errorField?: SignedExchangeErrorField;
  }

  /**
   * Information about a signed exchange response.
   */
  export interface SignedExchangeInfo {
    /**
     * The outer response of signed HTTP exchange which was received from network.
     */
    outerResponse: Response;
    /**
     * Information about the signed exchange header.
     */
    header?: SignedExchangeHeader;
    /**
     * Security details for the signed exchange header.
     */
    securityDetails?: SecurityDetails;
    /**
     * Errors occurred while handling the signed exchagne.
     */
    errors?: SignedExchangeError[];
  }

  /**
   * List of content encodings supported by the backend.
   */
  export const enum ContentEncoding {
    Deflate = 'deflate',
    Gzip = 'gzip',
    Br = 'br',
  }

  export const enum PrivateNetworkRequestPolicy {
    Allow = 'Allow',
    BlockFromInsecureToMorePrivate = 'BlockFromInsecureToMorePrivate',
    WarnFromInsecureToMorePrivate = 'WarnFromInsecureToMorePrivate',
    PreflightBlock = 'PreflightBlock',
    PreflightWarn = 'PreflightWarn',
  }

  export const enum IPAddressSpace {
    Local = 'Local',
    Private = 'Private',
    Public = 'Public',
    Unknown = 'Unknown',
  }

  export interface ConnectTiming {
    /**
     * Timing's requestTime is a baseline in seconds, while the other numbers are ticks in
     * milliseconds relatively to this requestTime. Matches ResourceTiming's requestTime for
     * the same request (but not for redirected requests).
     */
    requestTime: number;
  }

  export interface ClientSecurityState {
    initiatorIsSecureContext: boolean;
    initiatorIPAddressSpace: IPAddressSpace;
    privateNetworkRequestPolicy: PrivateNetworkRequestPolicy;
  }

  export const enum CrossOriginOpenerPolicyValue {
    SameOrigin = 'SameOrigin',
    SameOriginAllowPopups = 'SameOriginAllowPopups',
    RestrictProperties = 'RestrictProperties',
    UnsafeNone = 'UnsafeNone',
    SameOriginPlusCoep = 'SameOriginPlusCoep',
    RestrictPropertiesPlusCoep = 'RestrictPropertiesPlusCoep',
  }

  export interface CrossOriginOpenerPolicyStatus {
    value: CrossOriginOpenerPolicyValue;
    reportOnlyValue: CrossOriginOpenerPolicyValue;
    reportingEndpoint?: string;
    reportOnlyReportingEndpoint?: string;
  }

  export const enum CrossOriginEmbedderPolicyValue {
    None = 'None',
    Credentialless = 'Credentialless',
    RequireCorp = 'RequireCorp',
  }

  export interface CrossOriginEmbedderPolicyStatus {
    value: CrossOriginEmbedderPolicyValue;
    reportOnlyValue: CrossOriginEmbedderPolicyValue;
    reportingEndpoint?: string;
    reportOnlyReportingEndpoint?: string;
  }

  export interface SecurityIsolationStatus {
    coop?: CrossOriginOpenerPolicyStatus;
    coep?: CrossOriginEmbedderPolicyStatus;
  }

  /**
   * The status of a Reporting API report.
   */
  export const enum ReportStatus {
    Queued = 'Queued',
    Pending = 'Pending',
    MarkedForRemoval = 'MarkedForRemoval',
    Success = 'Success',
  }

  export type ReportId = OpaqueIdentifier<string, 'Protocol.Network.ReportId'>;

  /**
   * An object representing a report generated by the Reporting API.
   */
  export interface ReportingApiReport {
    id: ReportId;
    /**
     * The URL of the document that triggered the report.
     */
    initiatorUrl: string;
    /**
     * The name of the endpoint group that should be used to deliver the report.
     */
    destination: string;
    /**
     * The type of the report (specifies the set of data that is contained in the report body).
     */
    type: string;
    /**
     * When the report was generated.
     */
    timestamp: Network.TimeSinceEpoch;
    /**
     * How many uploads deep the related request was.
     */
    depth: integer;
    /**
     * The number of delivery attempts made so far, not including an active attempt.
     */
    completedAttempts: integer;
    body: any;
    status: ReportStatus;
  }

  export interface ReportingApiEndpoint {
    /**
     * The URL of the endpoint to which reports may be delivered.
     */
    url: string;
    /**
     * Name of the endpoint group.
     */
    groupName: string;
  }

  /**
   * An object providing the result of a network resource load.
   */
  export interface LoadNetworkResourcePageResult {
    success: boolean;
    /**
     * Optional values used for error reporting.
     */
    netError?: number;
    netErrorName?: string;
    httpStatusCode?: number;
    /**
     * If successful, one of the following two fields holds the result.
     */
    stream?: IO.StreamHandle;
    /**
     * Response headers.
     */
    headers?: Network.Headers;
  }

  /**
   * An options object that may be extended later to better support CORS,
   * CORB and streaming.
   */
  export interface LoadNetworkResourceOptions {
    disableCache: boolean;
    includeCredentials: boolean;
  }

  export interface SetAcceptedEncodingsRequest {
    /**
     * List of accepted content encodings.
     */
    encodings: ContentEncoding[];
  }

  export interface CanClearBrowserCacheResponse extends ProtocolResponseWithError {
    /**
     * True if browser cache can be cleared.
     */
    result: boolean;
  }

  export interface CanClearBrowserCookiesResponse extends ProtocolResponseWithError {
    /**
     * True if browser cookies can be cleared.
     */
    result: boolean;
  }

  export interface CanEmulateNetworkConditionsResponse extends ProtocolResponseWithError {
    /**
     * True if emulation of network conditions is supported.
     */
    result: boolean;
  }

  export interface ContinueInterceptedRequestRequest {
    interceptionId: InterceptionId;
    /**
     * If set this causes the request to fail with the given reason. Passing `Aborted` for requests
     * marked with `isNavigationRequest` also cancels the navigation. Must not be set in response
     * to an authChallenge.
     */
    errorReason?: ErrorReason;
    /**
     * If set the requests completes using with the provided base64 encoded raw response, including
     * HTTP status line and headers etc... Must not be set in response to an authChallenge.
     */
    rawResponse?: binary;
    /**
     * If set the request url will be modified in a way that's not observable by page. Must not be
     * set in response to an authChallenge.
     */
    url?: string;
    /**
     * If set this allows the request method to be overridden. Must not be set in response to an
     * authChallenge.
     */
    method?: string;
    /**
     * If set this allows postData to be set. Must not be set in response to an authChallenge.
     */
    postData?: string;
    /**
     * If set this allows the request headers to be changed. Must not be set in response to an
     * authChallenge.
     */
    headers?: Headers;
    /**
     * Response to a requestIntercepted with an authChallenge. Must not be set otherwise.
     */
    authChallengeResponse?: AuthChallengeResponse;
  }

  export interface DeleteCookiesRequest {
    /**
     * Name of the cookies to remove.
     */
    name: string;
    /**
     * If specified, deletes all the cookies with the given name where domain and path match
     * provided URL.
     */
    url?: string;
    /**
     * If specified, deletes only cookies with the exact domain.
     */
    domain?: string;
    /**
     * If specified, deletes only cookies with the exact path.
     */
    path?: string;
  }

  export interface EmulateNetworkConditionsRequest {
    /**
     * True to emulate internet disconnection.
     */
    offline: boolean;
    /**
     * Minimum latency from request sent to response headers received (ms).
     */
    latency: number;
    /**
     * Maximal aggregated download throughput (bytes/sec). -1 disables download throttling.
     */
    downloadThroughput: number;
    /**
     * Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling.
     */
    uploadThroughput: number;
    /**
     * Connection type if known.
     */
    connectionType?: ConnectionType;
  }

  export interface EnableRequest {
    /**
     * Buffer size in bytes to use when preserving network payloads (XHRs, etc).
     */
    maxTotalBufferSize?: integer;
    /**
     * Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc).
     */
    maxResourceBufferSize?: integer;
    /**
     * Longest post body size (in bytes) that would be included in requestWillBeSent notification
     */
    maxPostDataSize?: integer;
  }

  export interface GetAllCookiesResponse extends ProtocolResponseWithError {
    /**
     * Array of cookie objects.
     */
    cookies: Cookie[];
  }

  export interface GetCertificateRequest {
    /**
     * Origin to get certificate for.
     */
    origin: string;
  }

  export interface GetCertificateResponse extends ProtocolResponseWithError {
    tableNames: string[];
  }

  export interface GetCookiesRequest {
    /**
     * The list of URLs for which applicable cookies will be fetched.
     * If not specified, it's assumed to be set to the list containing
     * the URLs of the page and all of its subframes.
     */
    urls?: string[];
  }

  export interface GetCookiesResponse extends ProtocolResponseWithError {
    /**
     * Array of cookie objects.
     */
    cookies: Cookie[];
  }

  export interface GetResponseBodyRequest {
    /**
     * Identifier of the network request to get content for.
     */
    requestId: RequestId;
  }

  export interface GetResponseBodyResponse extends ProtocolResponseWithError {
    /**
     * Response body.
     */
    body: string;
    /**
     * True, if content was sent as base64.
     */
    base64Encoded: boolean;
  }

  export interface GetRequestPostDataRequest {
    /**
     * Identifier of the network request to get content for.
     */
    requestId: RequestId;
  }

  export interface GetRequestPostDataResponse extends ProtocolResponseWithError {
    /**
     * Request body string, omitting files from multipart requests
     */
    postData: string;
  }

  export interface GetResponseBodyForInterceptionRequest {
    /**
     * Identifier for the intercepted request to get body for.
     */
    interceptionId: InterceptionId;
  }

  export interface GetResponseBodyForInterceptionResponse extends ProtocolResponseWithError {
    /**
     * Response body.
     */
    body: string;
    /**
     * True, if content was sent as base64.
     */
    base64Encoded: boolean;
  }

  export interface TakeResponseBodyForInterceptionAsStreamRequest {
    interceptionId: InterceptionId;
  }

  export interface TakeResponseBodyForInterceptionAsStreamResponse extends ProtocolResponseWithError {
    stream: IO.StreamHandle;
  }

  export interface ReplayXHRRequest {
    /**
     * Identifier of XHR to replay.
     */
    requestId: RequestId;
  }

  export interface SearchInResponseBodyRequest {
    /**
     * Identifier of the network response to search.
     */
    requestId: RequestId;
    /**
     * String to search for.
     */
    query: string;
    /**
     * If true, search is case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * If true, treats string parameter as regex.
     */
    isRegex?: boolean;
  }

  export interface SearchInResponseBodyResponse extends ProtocolResponseWithError {
    /**
     * List of search matches.
     */
    result: Debugger.SearchMatch[];
  }

  export interface SetBlockedURLsRequest {
    /**
     * URL patterns to block. Wildcards ('*') are allowed.
     */
    urls: string[];
  }

  export interface SetBypassServiceWorkerRequest {
    /**
     * Bypass service worker and load from network.
     */
    bypass: boolean;
  }

  export interface SetCacheDisabledRequest {
    /**
     * Cache disabled state.
     */
    cacheDisabled: boolean;
  }

  export interface SetCookieRequest {
    /**
     * Cookie name.
     */
    name: string;
    /**
     * Cookie value.
     */
    value: string;
    /**
     * The request-URI to associate with the setting of the cookie. This value can affect the
     * default domain, path, source port, and source scheme values of the created cookie.
     */
    url?: string;
    /**
     * Cookie domain.
     */
    domain?: string;
    /**
     * Cookie path.
     */
    path?: string;
    /**
     * True if cookie is secure.
     */
    secure?: boolean;
    /**
     * True if cookie is http-only.
     */
    httpOnly?: boolean;
    /**
     * Cookie SameSite type.
     */
    sameSite?: CookieSameSite;
    /**
     * Cookie expiration date, session cookie if not set
     */
    expires?: TimeSinceEpoch;
    /**
     * Cookie Priority type.
     */
    priority?: CookiePriority;
    /**
     * True if cookie is SameParty.
     */
    sameParty?: boolean;
    /**
     * Cookie source scheme type.
     */
    sourceScheme?: CookieSourceScheme;
    /**
     * Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.
     * An unspecified port value allows protocol clients to emulate legacy cookie scope for the port.
     * This is a temporary ability and it will be removed in the future.
     */
    sourcePort?: integer;
    /**
     * Cookie partition key. The site of the top-level URL the browser was visiting at the start
     * of the request to the endpoint that set the cookie.
     * If not set, the cookie will be set as not partitioned.
     */
    partitionKey?: string;
  }

  export interface SetCookieResponse extends ProtocolResponseWithError {
    /**
     * Always set to true. If an error occurs, the response indicates protocol error.
     */
    success: boolean;
  }

  export interface SetCookiesRequest {
    /**
     * Cookies to be set.
     */
    cookies: CookieParam[];
  }

  export interface SetExtraHTTPHeadersRequest {
    /**
     * Map with extra HTTP headers.
     */
    headers: Headers;
  }

  export interface SetAttachDebugStackRequest {
    /**
     * Whether to attach a page script stack for debugging purpose.
     */
    enabled: boolean;
  }

  export interface SetRequestInterceptionRequest {
    /**
     * Requests matching any of these patterns will be forwarded and wait for the corresponding
     * continueInterceptedRequest call.
     */
    patterns: RequestPattern[];
  }

  export interface SetUserAgentOverrideRequest {
    /**
     * User agent to use.
     */
    userAgent: string;
    /**
     * Browser langugage to emulate.
     */
    acceptLanguage?: string;
    /**
     * The platform navigator.platform should return.
     */
    platform?: string;
    /**
     * To be sent in Sec-CH-UA-* headers and returned in navigator.userAgentData
     */
    userAgentMetadata?: Emulation.UserAgentMetadata;
  }

  export interface GetSecurityIsolationStatusRequest {
    /**
     * If no frameId is provided, the status of the target is provided.
     */
    frameId?: Page.FrameId;
  }

  export interface GetSecurityIsolationStatusResponse extends ProtocolResponseWithError {
    status: SecurityIsolationStatus;
  }

  export interface EnableReportingApiRequest {
    /**
     * Whether to enable or disable events for the Reporting API
     */
    enable: boolean;
  }

  export interface LoadNetworkResourceRequest {
    /**
     * Frame id to get the resource for. Mandatory for frame targets, and
     * should be omitted for worker targets.
     */
    frameId?: Page.FrameId;
    /**
     * URL of the resource to get content for.
     */
    url: string;
    /**
     * Options for the request.
     */
    options: LoadNetworkResourceOptions;
  }

  export interface LoadNetworkResourceResponse extends ProtocolResponseWithError {
    resource: LoadNetworkResourcePageResult;
  }

  /**
   * Fired when data chunk was received over the network.
   */
  export interface DataReceivedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * Data chunk length.
     */
    dataLength: integer;
    /**
     * Actual bytes received (might be less than dataLength for compressed encodings).
     */
    encodedDataLength: integer;
  }

  /**
   * Fired when EventSource message is received.
   */
  export interface EventSourceMessageReceivedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * Message type.
     */
    eventName: string;
    /**
     * Message identifier.
     */
    eventId: string;
    /**
     * Message content.
     */
    data: string;
  }

  /**
   * Fired when HTTP request has failed to load.
   */
  export interface LoadingFailedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * Resource type.
     */
    type: ResourceType;
    /**
     * User friendly error message.
     */
    errorText: string;
    /**
     * True if loading was canceled.
     */
    canceled?: boolean;
    /**
     * The reason why loading was blocked, if any.
     */
    blockedReason?: BlockedReason;
    /**
     * The reason why loading was blocked by CORS, if any.
     */
    corsErrorStatus?: CorsErrorStatus;
  }

  /**
   * Fired when HTTP request has finished loading.
   */
  export interface LoadingFinishedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * Total number of bytes received for this request.
     */
    encodedDataLength: number;
    /**
     * Set when 1) response was blocked by Cross-Origin Read Blocking and also
     * 2) this needs to be reported to the DevTools console.
     */
    shouldReportCorbBlocking?: boolean;
  }

  /**
   * Details of an intercepted HTTP request, which must be either allowed, blocked, modified or
   * mocked.
   * Deprecated, use Fetch.requestPaused instead.
   */
  export interface RequestInterceptedEvent {
    /**
     * Each request the page makes will have a unique id, however if any redirects are encountered
     * while processing that fetch, they will be reported with the same id as the original fetch.
     * Likewise if HTTP authentication is needed then the same fetch id will be used.
     */
    interceptionId: InterceptionId;
    request: Request;
    /**
     * The id of the frame that initiated the request.
     */
    frameId: Page.FrameId;
    /**
     * How the requested resource will be used.
     */
    resourceType: ResourceType;
    /**
     * Whether this is a navigation request, which can abort the navigation completely.
     */
    isNavigationRequest: boolean;
    /**
     * Set if the request is a navigation that will result in a download.
     * Only present after response is received from the server (i.e. HeadersReceived stage).
     */
    isDownload?: boolean;
    /**
     * Redirect location, only sent if a redirect was intercepted.
     */
    redirectUrl?: string;
    /**
     * Details of the Authorization Challenge encountered. If this is set then
     * continueInterceptedRequest must contain an authChallengeResponse.
     */
    authChallenge?: AuthChallenge;
    /**
     * Response error if intercepted at response stage or if redirect occurred while intercepting
     * request.
     */
    responseErrorReason?: ErrorReason;
    /**
     * Response code if intercepted at response stage or if redirect occurred while intercepting
     * request or auth retry occurred.
     */
    responseStatusCode?: integer;
    /**
     * Response headers if intercepted at the response stage or if redirect occurred while
     * intercepting request or auth retry occurred.
     */
    responseHeaders?: Headers;
    /**
     * If the intercepted request had a corresponding requestWillBeSent event fired for it, then
     * this requestId will be the same as the requestId present in the requestWillBeSent event.
     */
    requestId?: RequestId;
  }

  /**
   * Fired if request ended up loading from cache.
   */
  export interface RequestServedFromCacheEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
  }

  /**
   * Fired when page is about to send HTTP request.
   */
  export interface RequestWillBeSentEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Loader identifier. Empty string if the request is fetched from worker.
     */
    loaderId: LoaderId;
    /**
     * URL of the document this request is loaded for.
     */
    documentURL: string;
    /**
     * Request data.
     */
    request: Request;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * Timestamp.
     */
    wallTime: TimeSinceEpoch;
    /**
     * Request initiator.
     */
    initiator: Initiator;
    /**
     * In the case that redirectResponse is populated, this flag indicates whether
     * requestWillBeSentExtraInfo and responseReceivedExtraInfo events will be or were emitted
     * for the request which was just redirected.
     */
    redirectHasExtraInfo: boolean;
    /**
     * Redirect response data.
     */
    redirectResponse?: Response;
    /**
     * Type of this resource.
     */
    type?: ResourceType;
    /**
     * Frame identifier.
     */
    frameId?: Page.FrameId;
    /**
     * Whether the request is initiated by a user gesture. Defaults to false.
     */
    hasUserGesture?: boolean;
  }

  /**
   * Fired when resource loading priority is changed
   */
  export interface ResourceChangedPriorityEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * New priority
     */
    newPriority: ResourcePriority;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
  }

  /**
   * Fired when a signed exchange was received over the network
   */
  export interface SignedExchangeReceivedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Information about the signed exchange response.
     */
    info: SignedExchangeInfo;
  }

  /**
   * Fired when HTTP response is available.
   */
  export interface ResponseReceivedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Loader identifier. Empty string if the request is fetched from worker.
     */
    loaderId: LoaderId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * Resource type.
     */
    type: ResourceType;
    /**
     * Response data.
     */
    response: Response;
    /**
     * Indicates whether requestWillBeSentExtraInfo and responseReceivedExtraInfo events will be
     * or were emitted for this request.
     */
    hasExtraInfo: boolean;
    /**
     * Frame identifier.
     */
    frameId?: Page.FrameId;
  }

  /**
   * Fired when WebSocket is closed.
   */
  export interface WebSocketClosedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
  }

  /**
   * Fired upon WebSocket creation.
   */
  export interface WebSocketCreatedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * WebSocket request URL.
     */
    url: string;
    /**
     * Request initiator.
     */
    initiator?: Initiator;
  }

  /**
   * Fired when WebSocket message error occurs.
   */
  export interface WebSocketFrameErrorEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * WebSocket error message.
     */
    errorMessage: string;
  }

  /**
   * Fired when WebSocket message is received.
   */
  export interface WebSocketFrameReceivedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * WebSocket response data.
     */
    response: WebSocketFrame;
  }

  /**
   * Fired when WebSocket message is sent.
   */
  export interface WebSocketFrameSentEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * WebSocket response data.
     */
    response: WebSocketFrame;
  }

  /**
   * Fired when WebSocket handshake response becomes available.
   */
  export interface WebSocketHandshakeResponseReceivedEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * WebSocket response data.
     */
    response: WebSocketResponse;
  }

  /**
   * Fired when WebSocket is about to initiate handshake.
   */
  export interface WebSocketWillSendHandshakeRequestEvent {
    /**
     * Request identifier.
     */
    requestId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * UTC Timestamp.
     */
    wallTime: TimeSinceEpoch;
    /**
     * WebSocket request data.
     */
    request: WebSocketRequest;
  }

  /**
   * Fired upon WebTransport creation.
   */
  export interface WebTransportCreatedEvent {
    /**
     * WebTransport identifier.
     */
    transportId: RequestId;
    /**
     * WebTransport request URL.
     */
    url: string;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
    /**
     * Request initiator.
     */
    initiator?: Initiator;
  }

  /**
   * Fired when WebTransport handshake is finished.
   */
  export interface WebTransportConnectionEstablishedEvent {
    /**
     * WebTransport identifier.
     */
    transportId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
  }

  /**
   * Fired when WebTransport is disposed.
   */
  export interface WebTransportClosedEvent {
    /**
     * WebTransport identifier.
     */
    transportId: RequestId;
    /**
     * Timestamp.
     */
    timestamp: MonotonicTime;
  }

  /**
   * Fired when additional information about a requestWillBeSent event is available from the
   * network stack. Not every requestWillBeSent event will have an additional
   * requestWillBeSentExtraInfo fired for it, and there is no guarantee whether requestWillBeSent
   * or requestWillBeSentExtraInfo will be fired first for the same request.
   */
  export interface RequestWillBeSentExtraInfoEvent {
    /**
     * Request identifier. Used to match this information to an existing requestWillBeSent event.
     */
    requestId: RequestId;
    /**
     * A list of cookies potentially associated to the requested URL. This includes both cookies sent with
     * the request and the ones not sent; the latter are distinguished by having blockedReason field set.
     */
    associatedCookies: BlockedCookieWithReason[];
    /**
     * Raw request headers as they will be sent over the wire.
     */
    headers: Headers;
    /**
     * Connection timing information for the request.
     */
    connectTiming: ConnectTiming;
    /**
     * The client security state set for the request.
     */
    clientSecurityState?: ClientSecurityState;
  }

  /**
   * Fired when additional information about a responseReceived event is available from the network
   * stack. Not every responseReceived event will have an additional responseReceivedExtraInfo for
   * it, and responseReceivedExtraInfo may be fired before or after responseReceived.
   */
  export interface ResponseReceivedExtraInfoEvent {
    /**
     * Request identifier. Used to match this information to another responseReceived event.
     */
    requestId: RequestId;
    /**
     * A list of cookies which were not stored from the response along with the corresponding
     * reasons for blocking. The cookies here may not be valid due to syntax errors, which
     * are represented by the invalid cookie line string instead of a proper cookie.
     */
    blockedCookies: BlockedSetCookieWithReason[];
    /**
     * Raw response headers as they were received over the wire.
     */
    headers: Headers;
    /**
     * The IP address space of the resource. The address space can only be determined once the transport
     * established the connection, so we can't send it in `requestWillBeSentExtraInfo`.
     */
    resourceIPAddressSpace: IPAddressSpace;
    /**
     * The status code of the response. This is useful in cases the request failed and no responseReceived
     * event is triggered, which is the case for, e.g., CORS errors. This is also the correct status code
     * for cached requests, where the status in responseReceived is a 200 and this will be 304.
     */
    statusCode: integer;
    /**
     * Raw response header text as it was received over the wire. The raw text may not always be
     * available, such as in the case of HTTP/2 or QUIC.
     */
    headersText?: string;
  }

  export const enum TrustTokenOperationDoneEventStatus {
    Ok = 'Ok',
    InvalidArgument = 'InvalidArgument',
    FailedPrecondition = 'FailedPrecondition',
    ResourceExhausted = 'ResourceExhausted',
    AlreadyExists = 'AlreadyExists',
    Unavailable = 'Unavailable',
    BadResponse = 'BadResponse',
    InternalError = 'InternalError',
    UnknownError = 'UnknownError',
    FulfilledLocally = 'FulfilledLocally',
  }

  /**
   * Fired exactly once for each Trust Token operation. Depending on
   * the type of the operation and whether the operation succeeded or
   * failed, the event is fired before the corresponding request was sent
   * or after the response was received.
   */
  export interface TrustTokenOperationDoneEvent {
    /**
     * Detailed success or error status of the operation.
     * 'AlreadyExists' also signifies a successful operation, as the result
     * of the operation already exists und thus, the operation was abort
     * preemptively (e.g. a cache hit).
     */
    status: TrustTokenOperationDoneEventStatus;
    type: TrustTokenOperationType;
    requestId: RequestId;
    /**
     * Top level origin. The context in which the operation was attempted.
     */
    topLevelOrigin?: string;
    /**
     * Origin of the issuer in case of a "Issuance" or "Redemption" operation.
     */
    issuerOrigin?: string;
    /**
     * The number of obtained Trust Tokens on a successful "Issuance" operation.
     */
    issuedTokenCount?: integer;
  }

  /**
   * Fired once when parsing the .wbn file has succeeded.
   * The event contains the information about the web bundle contents.
   */
  export interface SubresourceWebBundleMetadataReceivedEvent {
    /**
     * Request identifier. Used to match this information to another event.
     */
    requestId: RequestId;
    /**
     * A list of URLs of resources in the subresource Web Bundle.
     */
    urls: string[];
  }

  /**
   * Fired once when parsing the .wbn file has failed.
   */
  export interface SubresourceWebBundleMetadataErrorEvent {
    /**
     * Request identifier. Used to match this information to another event.
     */
    requestId: RequestId;
    /**
     * Error message
     */
    errorMessage: string;
  }

  /**
   * Fired when handling requests for resources within a .wbn file.
   * Note: this will only be fired for resources that are requested by the webpage.
   */
  export interface SubresourceWebBundleInnerResponseParsedEvent {
    /**
     * Request identifier of the subresource request
     */
    innerRequestId: RequestId;
    /**
     * URL of the subresource resource.
     */
    innerRequestURL: string;
    /**
     * Bundle request identifier. Used to match this information to another event.
     * This made be absent in case when the instrumentation was enabled only
     * after webbundle was parsed.
     */
    bundleRequestId?: RequestId;
  }

  /**
   * Fired when request for resources within a .wbn file failed.
   */
  export interface SubresourceWebBundleInnerResponseErrorEvent {
    /**
     * Request identifier of the subresource request
     */
    innerRequestId: RequestId;
    /**
     * URL of the subresource resource.
     */
    innerRequestURL: string;
    /**
     * Error message
     */
    errorMessage: string;
    /**
     * Bundle request identifier. Used to match this information to another event.
     * This made be absent in case when the instrumentation was enabled only
     * after webbundle was parsed.
     */
    bundleRequestId?: RequestId;
  }

  /**
   * Is sent whenever a new report is added.
   * And after 'enableReportingApi' for all existing reports.
   */
  export interface ReportingApiReportAddedEvent {
    report: ReportingApiReport;
  }

  export interface ReportingApiReportUpdatedEvent {
    report: ReportingApiReport;
  }

  export interface ReportingApiEndpointsChangedForOriginEvent {
    /**
     * Origin of the document(s) which configured the endpoints.
     */
    origin: string;
    endpoints: ReportingApiEndpoint[];
  }
}

/**
 * This domain provides various functionality related to drawing atop the inspected page.
 */
export namespace Overlay {

  /**
   * Configuration data for drawing the source order of an elements children.
   */
  export interface SourceOrderConfig {
    /**
     * the color to outline the givent element in.
     */
    parentOutlineColor: DOM.RGBA;
    /**
     * the color to outline the child elements in.
     */
    childOutlineColor: DOM.RGBA;
  }

  /**
   * Configuration data for the highlighting of Grid elements.
   */
  export interface GridHighlightConfig {
    /**
     * Whether the extension lines from grid cells to the rulers should be shown (default: false).
     */
    showGridExtensionLines?: boolean;
    /**
     * Show Positive line number labels (default: false).
     */
    showPositiveLineNumbers?: boolean;
    /**
     * Show Negative line number labels (default: false).
     */
    showNegativeLineNumbers?: boolean;
    /**
     * Show area name labels (default: false).
     */
    showAreaNames?: boolean;
    /**
     * Show line name labels (default: false).
     */
    showLineNames?: boolean;
    /**
     * Show track size labels (default: false).
     */
    showTrackSizes?: boolean;
    /**
     * The grid container border highlight color (default: transparent).
     */
    gridBorderColor?: DOM.RGBA;
    /**
     * The cell border color (default: transparent). Deprecated, please use rowLineColor and columnLineColor instead.
     */
    cellBorderColor?: DOM.RGBA;
    /**
     * The row line color (default: transparent).
     */
    rowLineColor?: DOM.RGBA;
    /**
     * The column line color (default: transparent).
     */
    columnLineColor?: DOM.RGBA;
    /**
     * Whether the grid border is dashed (default: false).
     */
    gridBorderDash?: boolean;
    /**
     * Whether the cell border is dashed (default: false). Deprecated, please us rowLineDash and columnLineDash instead.
     */
    cellBorderDash?: boolean;
    /**
     * Whether row lines are dashed (default: false).
     */
    rowLineDash?: boolean;
    /**
     * Whether column lines are dashed (default: false).
     */
    columnLineDash?: boolean;
    /**
     * The row gap highlight fill color (default: transparent).
     */
    rowGapColor?: DOM.RGBA;
    /**
     * The row gap hatching fill color (default: transparent).
     */
    rowHatchColor?: DOM.RGBA;
    /**
     * The column gap highlight fill color (default: transparent).
     */
    columnGapColor?: DOM.RGBA;
    /**
     * The column gap hatching fill color (default: transparent).
     */
    columnHatchColor?: DOM.RGBA;
    /**
     * The named grid areas border color (Default: transparent).
     */
    areaBorderColor?: DOM.RGBA;
    /**
     * The grid container background color (Default: transparent).
     */
    gridBackgroundColor?: DOM.RGBA;
  }

  /**
   * Configuration data for the highlighting of Flex container elements.
   */
  export interface FlexContainerHighlightConfig {
    /**
     * The style of the container border
     */
    containerBorder?: LineStyle;
    /**
     * The style of the separator between lines
     */
    lineSeparator?: LineStyle;
    /**
     * The style of the separator between items
     */
    itemSeparator?: LineStyle;
    /**
     * Style of content-distribution space on the main axis (justify-content).
     */
    mainDistributedSpace?: BoxStyle;
    /**
     * Style of content-distribution space on the cross axis (align-content).
     */
    crossDistributedSpace?: BoxStyle;
    /**
     * Style of empty space caused by row gaps (gap/row-gap).
     */
    rowGapSpace?: BoxStyle;
    /**
     * Style of empty space caused by columns gaps (gap/column-gap).
     */
    columnGapSpace?: BoxStyle;
    /**
     * Style of the self-alignment line (align-items).
     */
    crossAlignment?: LineStyle;
  }

  /**
   * Configuration data for the highlighting of Flex item elements.
   */
  export interface FlexItemHighlightConfig {
    /**
     * Style of the box representing the item's base size
     */
    baseSizeBox?: BoxStyle;
    /**
     * Style of the border around the box representing the item's base size
     */
    baseSizeBorder?: LineStyle;
    /**
     * Style of the arrow representing if the item grew or shrank
     */
    flexibilityArrow?: LineStyle;
  }

  export const enum LineStylePattern {
    Dashed = 'dashed',
    Dotted = 'dotted',
  }

  /**
   * Style information for drawing a line.
   */
  export interface LineStyle {
    /**
     * The color of the line (default: transparent)
     */
    color?: DOM.RGBA;
    /**
     * The line pattern (default: solid)
     */
    pattern?: LineStylePattern;
  }

  /**
   * Style information for drawing a box.
   */
  export interface BoxStyle {
    /**
     * The background color for the box (default: transparent)
     */
    fillColor?: DOM.RGBA;
    /**
     * The hatching color for the box (default: transparent)
     */
    hatchColor?: DOM.RGBA;
  }

  export const enum ContrastAlgorithm {
    Aa = 'aa',
    Aaa = 'aaa',
    Apca = 'apca',
  }

  /**
   * Configuration data for the highlighting of page elements.
   */
  export interface HighlightConfig {
    /**
     * Whether the node info tooltip should be shown (default: false).
     */
    showInfo?: boolean;
    /**
     * Whether the node styles in the tooltip (default: false).
     */
    showStyles?: boolean;
    /**
     * Whether the rulers should be shown (default: false).
     */
    showRulers?: boolean;
    /**
     * Whether the a11y info should be shown (default: true).
     */
    showAccessibilityInfo?: boolean;
    /**
     * Whether the extension lines from node to the rulers should be shown (default: false).
     */
    showExtensionLines?: boolean;
    /**
     * The content box highlight fill color (default: transparent).
     */
    contentColor?: DOM.RGBA;
    /**
     * The padding highlight fill color (default: transparent).
     */
    paddingColor?: DOM.RGBA;
    /**
     * The border highlight fill color (default: transparent).
     */
    borderColor?: DOM.RGBA;
    /**
     * The margin highlight fill color (default: transparent).
     */
    marginColor?: DOM.RGBA;
    /**
     * The event target element highlight fill color (default: transparent).
     */
    eventTargetColor?: DOM.RGBA;
    /**
     * The shape outside fill color (default: transparent).
     */
    shapeColor?: DOM.RGBA;
    /**
     * The shape margin fill color (default: transparent).
     */
    shapeMarginColor?: DOM.RGBA;
    /**
     * The grid layout color (default: transparent).
     */
    cssGridColor?: DOM.RGBA;
    /**
     * The color format used to format color styles (default: hex).
     */
    colorFormat?: ColorFormat;
    /**
     * The grid layout highlight configuration (default: all transparent).
     */
    gridHighlightConfig?: GridHighlightConfig;
    /**
     * The flex container highlight configuration (default: all transparent).
     */
    flexContainerHighlightConfig?: FlexContainerHighlightConfig;
    /**
     * The flex item highlight configuration (default: all transparent).
     */
    flexItemHighlightConfig?: FlexItemHighlightConfig;
    /**
     * The contrast algorithm to use for the contrast ratio (default: aa).
     */
    contrastAlgorithm?: ContrastAlgorithm;
    /**
     * The container query container highlight configuration (default: all transparent).
     */
    containerQueryContainerHighlightConfig?: ContainerQueryContainerHighlightConfig;
  }

  export const enum ColorFormat {
    Rgb = 'rgb',
    Hsl = 'hsl',
    Hwb = 'hwb',
    Hex = 'hex',
  }

  /**
   * Configurations for Persistent Grid Highlight
   */
  export interface GridNodeHighlightConfig {
    /**
     * A descriptor for the highlight appearance.
     */
    gridHighlightConfig: GridHighlightConfig;
    /**
     * Identifier of the node to highlight.
     */
    nodeId: DOM.NodeId;
  }

  export interface FlexNodeHighlightConfig {
    /**
     * A descriptor for the highlight appearance of flex containers.
     */
    flexContainerHighlightConfig: FlexContainerHighlightConfig;
    /**
     * Identifier of the node to highlight.
     */
    nodeId: DOM.NodeId;
  }

  export interface ScrollSnapContainerHighlightConfig {
    /**
     * The style of the snapport border (default: transparent)
     */
    snapportBorder?: LineStyle;
    /**
     * The style of the snap area border (default: transparent)
     */
    snapAreaBorder?: LineStyle;
    /**
     * The margin highlight fill color (default: transparent).
     */
    scrollMarginColor?: DOM.RGBA;
    /**
     * The padding highlight fill color (default: transparent).
     */
    scrollPaddingColor?: DOM.RGBA;
  }

  export interface ScrollSnapHighlightConfig {
    /**
     * A descriptor for the highlight appearance of scroll snap containers.
     */
    scrollSnapContainerHighlightConfig: ScrollSnapContainerHighlightConfig;
    /**
     * Identifier of the node to highlight.
     */
    nodeId: DOM.NodeId;
  }

  /**
   * Configuration for dual screen hinge
   */
  export interface HingeConfig {
    /**
     * A rectangle represent hinge
     */
    rect: DOM.Rect;
    /**
     * The content box highlight fill color (default: a dark color).
     */
    contentColor?: DOM.RGBA;
    /**
     * The content box highlight outline color (default: transparent).
     */
    outlineColor?: DOM.RGBA;
  }

  export interface ContainerQueryHighlightConfig {
    /**
     * A descriptor for the highlight appearance of container query containers.
     */
    containerQueryContainerHighlightConfig: ContainerQueryContainerHighlightConfig;
    /**
     * Identifier of the container node to highlight.
     */
    nodeId: DOM.NodeId;
  }

  export interface ContainerQueryContainerHighlightConfig {
    /**
     * The style of the container border.
     */
    containerBorder?: LineStyle;
    /**
     * The style of the descendants' borders.
     */
    descendantBorder?: LineStyle;
  }

  export interface IsolatedElementHighlightConfig {
    /**
     * A descriptor for the highlight appearance of an element in isolation mode.
     */
    isolationModeHighlightConfig: IsolationModeHighlightConfig;
    /**
     * Identifier of the isolated element to highlight.
     */
    nodeId: DOM.NodeId;
  }

  export interface IsolationModeHighlightConfig {
    /**
     * The fill color of the resizers (default: transparent).
     */
    resizerColor?: DOM.RGBA;
    /**
     * The fill color for resizer handles (default: transparent).
     */
    resizerHandleColor?: DOM.RGBA;
    /**
     * The fill color for the mask covering non-isolated elements (default: transparent).
     */
    maskColor?: DOM.RGBA;
  }

  export const enum InspectMode {
    SearchForNode = 'searchForNode',
    SearchForUAShadowDOM = 'searchForUAShadowDOM',
    CaptureAreaScreenshot = 'captureAreaScreenshot',
    ShowDistances = 'showDistances',
    None = 'none',
  }

  export interface GetHighlightObjectForTestRequest {
    /**
     * Id of the node to get highlight object for.
     */
    nodeId: DOM.NodeId;
    /**
     * Whether to include distance info.
     */
    includeDistance?: boolean;
    /**
     * Whether to include style info.
     */
    includeStyle?: boolean;
    /**
     * The color format to get config with (default: hex).
     */
    colorFormat?: ColorFormat;
    /**
     * Whether to show accessibility info (default: true).
     */
    showAccessibilityInfo?: boolean;
  }

  export interface GetHighlightObjectForTestResponse extends ProtocolResponseWithError {
    /**
     * Highlight data for the node.
     */
    highlight: any;
  }

  export interface GetGridHighlightObjectsForTestRequest {
    /**
     * Ids of the node to get highlight object for.
     */
    nodeIds: DOM.NodeId[];
  }

  export interface GetGridHighlightObjectsForTestResponse extends ProtocolResponseWithError {
    /**
     * Grid Highlight data for the node ids provided.
     */
    highlights: any;
  }

  export interface GetSourceOrderHighlightObjectForTestRequest {
    /**
     * Id of the node to highlight.
     */
    nodeId: DOM.NodeId;
  }

  export interface GetSourceOrderHighlightObjectForTestResponse extends ProtocolResponseWithError {
    /**
     * Source order highlight data for the node id provided.
     */
    highlight: any;
  }

  export interface HighlightFrameRequest {
    /**
     * Identifier of the frame to highlight.
     */
    frameId: Page.FrameId;
    /**
     * The content box highlight fill color (default: transparent).
     */
    contentColor?: DOM.RGBA;
    /**
     * The content box highlight outline color (default: transparent).
     */
    contentOutlineColor?: DOM.RGBA;
  }

  export interface HighlightNodeRequest {
    /**
     * A descriptor for the highlight appearance.
     */
    highlightConfig: HighlightConfig;
    /**
     * Identifier of the node to highlight.
     */
    nodeId?: DOM.NodeId;
    /**
     * Identifier of the backend node to highlight.
     */
    backendNodeId?: DOM.BackendNodeId;
    /**
     * JavaScript object id of the node to be highlighted.
     */
    objectId?: Runtime.RemoteObjectId;
    /**
     * Selectors to highlight relevant nodes.
     */
    selector?: string;
  }

  export interface HighlightQuadRequest {
    /**
     * Quad to highlight
     */
    quad: DOM.Quad;
    /**
     * The highlight fill color (default: transparent).
     */
    color?: DOM.RGBA;
    /**
     * The highlight outline color (default: transparent).
     */
    outlineColor?: DOM.RGBA;
  }

  export interface HighlightRectRequest {
    /**
     * X coordinate
     */
    x: integer;
    /**
     * Y coordinate
     */
    y: integer;
    /**
     * Rectangle width
     */
    width: integer;
    /**
     * Rectangle height
     */
    height: integer;
    /**
     * The highlight fill color (default: transparent).
     */
    color?: DOM.RGBA;
    /**
     * The highlight outline color (default: transparent).
     */
    outlineColor?: DOM.RGBA;
  }

  export interface HighlightSourceOrderRequest {
    /**
     * A descriptor for the appearance of the overlay drawing.
     */
    sourceOrderConfig: SourceOrderConfig;
    /**
     * Identifier of the node to highlight.
     */
    nodeId?: DOM.NodeId;
    /**
     * Identifier of the backend node to highlight.
     */
    backendNodeId?: DOM.BackendNodeId;
    /**
     * JavaScript object id of the node to be highlighted.
     */
    objectId?: Runtime.RemoteObjectId;
  }

  export interface SetInspectModeRequest {
    /**
     * Set an inspection mode.
     */
    mode: InspectMode;
    /**
     * A descriptor for the highlight appearance of hovered-over nodes. May be omitted if `enabled
     * == false`.
     */
    highlightConfig?: HighlightConfig;
  }

  export interface SetShowAdHighlightsRequest {
    /**
     * True for showing ad highlights
     */
    show: boolean;
  }

  export interface SetPausedInDebuggerMessageRequest {
    /**
     * The message to display, also triggers resume and step over controls.
     */
    message?: string;
  }

  export interface SetShowDebugBordersRequest {
    /**
     * True for showing debug borders
     */
    show: boolean;
  }

  export interface SetShowFPSCounterRequest {
    /**
     * True for showing the FPS counter
     */
    show: boolean;
  }

  export interface SetShowGridOverlaysRequest {
    /**
     * An array of node identifiers and descriptors for the highlight appearance.
     */
    gridNodeHighlightConfigs: GridNodeHighlightConfig[];
  }

  export interface SetShowFlexOverlaysRequest {
    /**
     * An array of node identifiers and descriptors for the highlight appearance.
     */
    flexNodeHighlightConfigs: FlexNodeHighlightConfig[];
  }

  export interface SetShowScrollSnapOverlaysRequest {
    /**
     * An array of node identifiers and descriptors for the highlight appearance.
     */
    scrollSnapHighlightConfigs: ScrollSnapHighlightConfig[];
  }

  export interface SetShowContainerQueryOverlaysRequest {
    /**
     * An array of node identifiers and descriptors for the highlight appearance.
     */
    containerQueryHighlightConfigs: ContainerQueryHighlightConfig[];
  }

  export interface SetShowPaintRectsRequest {
    /**
     * True for showing paint rectangles
     */
    result: boolean;
  }

  export interface SetShowLayoutShiftRegionsRequest {
    /**
     * True for showing layout shift regions
     */
    result: boolean;
  }

  export interface SetShowScrollBottleneckRectsRequest {
    /**
     * True for showing scroll bottleneck rects
     */
    show: boolean;
  }

  export interface SetShowHitTestBordersRequest {
    /**
     * True for showing hit-test borders
     */
    show: boolean;
  }

  export interface SetShowWebVitalsRequest {
    show: boolean;
  }

  export interface SetShowViewportSizeOnResizeRequest {
    /**
     * Whether to paint size or not.
     */
    show: boolean;
  }

  export interface SetShowHingeRequest {
    /**
     * hinge data, null means hideHinge
     */
    hingeConfig?: HingeConfig;
  }

  export interface SetShowIsolatedElementsRequest {
    /**
     * An array of node identifiers and descriptors for the highlight appearance.
     */
    isolatedElementHighlightConfigs: IsolatedElementHighlightConfig[];
  }

  /**
   * Fired when the node should be inspected. This happens after call to `setInspectMode` or when
   * user manually inspects an element.
   */
  export interface InspectNodeRequestedEvent {
    /**
     * Id of the node to inspect.
     */
    backendNodeId: DOM.BackendNodeId;
  }

  /**
   * Fired when the node should be highlighted. This happens after call to `setInspectMode`.
   */
  export interface NodeHighlightRequestedEvent {
    nodeId: DOM.NodeId;
  }

  /**
   * Fired when user asks to capture screenshot of some area on the page.
   */
  export interface ScreenshotRequestedEvent {
    /**
     * Viewport to capture, in device independent pixels (dip).
     */
    viewport: Page.Viewport;
  }
}

/**
 * Actions and events related to the inspected page belong to the page domain.
 */
export namespace Page {

  /**
   * Unique frame identifier.
   */
  export type FrameId = OpaqueIdentifier<string, 'Protocol.Page.FrameId'>;

  /**
   * Indicates whether a frame has been identified as an ad.
   */
  export const enum AdFrameType {
    None = 'none',
    Child = 'child',
    Root = 'root',
  }

  export const enum AdFrameExplanation {
    ParentIsAd = 'ParentIsAd',
    CreatedByAdScript = 'CreatedByAdScript',
    MatchedBlockingRule = 'MatchedBlockingRule',
  }

  /**
   * Indicates whether a frame has been identified as an ad and why.
   */
  export interface AdFrameStatus {
    adFrameType: AdFrameType;
    explanations?: AdFrameExplanation[];
  }

  /**
   * Identifies the bottom-most script which caused the frame to be labelled
   * as an ad.
   */
  export interface AdScriptId {
    /**
     * Script Id of the bottom-most script which caused the frame to be labelled
     * as an ad.
     */
    scriptId: Runtime.ScriptId;
    /**
     * Id of adScriptId's debugger.
     */
    debuggerId: Runtime.UniqueDebuggerId;
  }

  /**
   * Indicates whether the frame is a secure context and why it is the case.
   */
  export const enum SecureContextType {
    Secure = 'Secure',
    SecureLocalhost = 'SecureLocalhost',
    InsecureScheme = 'InsecureScheme',
    InsecureAncestor = 'InsecureAncestor',
  }

  /**
   * Indicates whether the frame is cross-origin isolated and why it is the case.
   */
  export const enum CrossOriginIsolatedContextType {
    Isolated = 'Isolated',
    NotIsolated = 'NotIsolated',
    NotIsolatedFeatureDisabled = 'NotIsolatedFeatureDisabled',
  }

  export const enum GatedAPIFeatures {
    SharedArrayBuffers = 'SharedArrayBuffers',
    SharedArrayBuffersTransferAllowed = 'SharedArrayBuffersTransferAllowed',
    PerformanceMeasureMemory = 'PerformanceMeasureMemory',
    PerformanceProfile = 'PerformanceProfile',
  }

  /**
   * All Permissions Policy features. This enum should match the one defined
   * in third_party/blink/renderer/core/permissions_policy/permissions_policy_features.json5.
   */
  export const enum PermissionsPolicyFeature {
    Accelerometer = 'accelerometer',
    AmbientLightSensor = 'ambient-light-sensor',
    AttributionReporting = 'attribution-reporting',
    Autoplay = 'autoplay',
    Bluetooth = 'bluetooth',
    BrowsingTopics = 'browsing-topics',
    Camera = 'camera',
    ChDpr = 'ch-dpr',
    ChDeviceMemory = 'ch-device-memory',
    ChDownlink = 'ch-downlink',
    ChEct = 'ch-ect',
    ChPrefersColorScheme = 'ch-prefers-color-scheme',
    ChRtt = 'ch-rtt',
    ChSaveData = 'ch-save-data',
    ChUa = 'ch-ua',
    ChUaArch = 'ch-ua-arch',
    ChUaBitness = 'ch-ua-bitness',
    ChUaPlatform = 'ch-ua-platform',
    ChUaModel = 'ch-ua-model',
    ChUaMobile = 'ch-ua-mobile',
    ChUaFull = 'ch-ua-full',
    ChUaFullVersion = 'ch-ua-full-version',
    ChUaFullVersionList = 'ch-ua-full-version-list',
    ChUaPlatformVersion = 'ch-ua-platform-version',
    ChUaReduced = 'ch-ua-reduced',
    ChUaWow64 = 'ch-ua-wow64',
    ChViewportHeight = 'ch-viewport-height',
    ChViewportWidth = 'ch-viewport-width',
    ChWidth = 'ch-width',
    ClipboardRead = 'clipboard-read',
    ClipboardWrite = 'clipboard-write',
    CrossOriginIsolated = 'cross-origin-isolated',
    DirectSockets = 'direct-sockets',
    DisplayCapture = 'display-capture',
    DocumentDomain = 'document-domain',
    EncryptedMedia = 'encrypted-media',
    ExecutionWhileOutOfViewport = 'execution-while-out-of-viewport',
    ExecutionWhileNotRendered = 'execution-while-not-rendered',
    FederatedCredentials = 'federated-credentials',
    FocusWithoutUserActivation = 'focus-without-user-activation',
    Fullscreen = 'fullscreen',
    Frobulate = 'frobulate',
    Gamepad = 'gamepad',
    Geolocation = 'geolocation',
    Gyroscope = 'gyroscope',
    Hid = 'hid',
    IdleDetection = 'idle-detection',
    InterestCohort = 'interest-cohort',
    JoinAdInterestGroup = 'join-ad-interest-group',
    KeyboardMap = 'keyboard-map',
    LocalFonts = 'local-fonts',
    Magnetometer = 'magnetometer',
    Microphone = 'microphone',
    Midi = 'midi',
    OtpCredentials = 'otp-credentials',
    Payment = 'payment',
    PictureInPicture = 'picture-in-picture',
    PublickeyCredentialsGet = 'publickey-credentials-get',
    RunAdAuction = 'run-ad-auction',
    ScreenWakeLock = 'screen-wake-lock',
    Serial = 'serial',
    SharedAutofill = 'shared-autofill',
    SharedStorage = 'shared-storage',
    StorageAccessAPI = 'storage-access-api',
    SyncXhr = 'sync-xhr',
    TrustTokenRedemption = 'trust-token-redemption',
    Usb = 'usb',
    VerticalScroll = 'vertical-scroll',
    WebShare = 'web-share',
    WindowPlacement = 'window-placement',
    XrSpatialTracking = 'xr-spatial-tracking',
  }

  /**
   * Reason for a permissions policy feature to be disabled.
   */
  export const enum PermissionsPolicyBlockReason {
    Header = 'Header',
    IframeAttribute = 'IframeAttribute',
    InFencedFrameTree = 'InFencedFrameTree',
    InIsolatedApp = 'InIsolatedApp',
  }

  export interface PermissionsPolicyBlockLocator {
    frameId: FrameId;
    blockReason: PermissionsPolicyBlockReason;
  }

  export interface PermissionsPolicyFeatureState {
    feature: PermissionsPolicyFeature;
    allowed: boolean;
    locator?: PermissionsPolicyBlockLocator;
  }

  /**
   * Origin Trial(https://www.chromium.org/blink/origin-trials) support.
   * Status for an Origin Trial token.
   */
  export const enum OriginTrialTokenStatus {
    Success = 'Success',
    NotSupported = 'NotSupported',
    Insecure = 'Insecure',
    Expired = 'Expired',
    WrongOrigin = 'WrongOrigin',
    InvalidSignature = 'InvalidSignature',
    Malformed = 'Malformed',
    WrongVersion = 'WrongVersion',
    FeatureDisabled = 'FeatureDisabled',
    TokenDisabled = 'TokenDisabled',
    FeatureDisabledForUser = 'FeatureDisabledForUser',
    UnknownTrial = 'UnknownTrial',
  }

  /**
   * Status for an Origin Trial.
   */
  export const enum OriginTrialStatus {
    Enabled = 'Enabled',
    ValidTokenNotProvided = 'ValidTokenNotProvided',
    OSNotSupported = 'OSNotSupported',
    TrialNotAllowed = 'TrialNotAllowed',
  }

  export const enum OriginTrialUsageRestriction {
    None = 'None',
    Subset = 'Subset',
  }

  export interface OriginTrialToken {
    origin: string;
    matchSubDomains: boolean;
    trialName: string;
    expiryTime: Network.TimeSinceEpoch;
    isThirdParty: boolean;
    usageRestriction: OriginTrialUsageRestriction;
  }

  export interface OriginTrialTokenWithStatus {
    rawTokenText: string;
    /**
     * `parsedToken` is present only when the token is extractable and
     * parsable.
     */
    parsedToken?: OriginTrialToken;
    status: OriginTrialTokenStatus;
  }

  export interface OriginTrial {
    trialName: string;
    status: OriginTrialStatus;
    tokensWithStatus: OriginTrialTokenWithStatus[];
  }

  /**
   * Information about the Frame on the page.
   */
  export interface Frame {
    /**
     * Frame unique identifier.
     */
    id: FrameId;
    /**
     * Parent frame identifier.
     */
    parentId?: FrameId;
    /**
     * Identifier of the loader associated with this frame.
     */
    loaderId: Network.LoaderId;
    /**
     * Frame's name as specified in the tag.
     */
    name?: string;
    /**
     * Frame document's URL without fragment.
     */
    url: string;
    /**
     * Frame document's URL fragment including the '#'.
     */
    urlFragment?: string;
    /**
     * Frame document's registered domain, taking the public suffixes list into account.
     * Extracted from the Frame's url.
     * Example URLs: http://www.google.com/file.html -> "google.com"
     *               http://a.b.co.uk/file.html      -> "b.co.uk"
     */
    domainAndRegistry: string;
    /**
     * Frame document's security origin.
     */
    securityOrigin: string;
    /**
     * Frame document's mimeType as determined by the browser.
     */
    mimeType: string;
    /**
     * If the frame failed to load, this contains the URL that could not be loaded. Note that unlike url above, this URL may contain a fragment.
     */
    unreachableUrl?: string;
    /**
     * Indicates whether this frame was tagged as an ad and why.
     */
    adFrameStatus?: AdFrameStatus;
    /**
     * Indicates whether the main document is a secure context and explains why that is the case.
     */
    secureContextType: SecureContextType;
    /**
     * Indicates whether this is a cross origin isolated context.
     */
    crossOriginIsolatedContextType: CrossOriginIsolatedContextType;
    /**
     * Indicated which gated APIs / features are available.
     */
    gatedAPIFeatures: GatedAPIFeatures[];
  }

  /**
   * Information about the Resource on the page.
   */
  export interface FrameResource {
    /**
     * Resource URL.
     */
    url: string;
    /**
     * Type of this resource.
     */
    type: Network.ResourceType;
    /**
     * Resource mimeType as determined by the browser.
     */
    mimeType: string;
    /**
     * last-modified timestamp as reported by server.
     */
    lastModified?: Network.TimeSinceEpoch;
    /**
     * Resource content size.
     */
    contentSize?: number;
    /**
     * True if the resource failed to load.
     */
    failed?: boolean;
    /**
     * True if the resource was canceled during loading.
     */
    canceled?: boolean;
  }

  /**
   * Information about the Frame hierarchy along with their cached resources.
   */
  export interface FrameResourceTree {
    /**
     * Frame information for this tree item.
     */
    frame: Frame;
    /**
     * Child frames.
     */
    childFrames?: FrameResourceTree[];
    /**
     * Information about frame resources.
     */
    resources: FrameResource[];
  }

  /**
   * Information about the Frame hierarchy.
   */
  export interface FrameTree {
    /**
     * Frame information for this tree item.
     */
    frame: Frame;
    /**
     * Child frames.
     */
    childFrames?: FrameTree[];
  }

  /**
   * Unique script identifier.
   */
  export type ScriptIdentifier = OpaqueIdentifier<string, 'Protocol.Page.ScriptIdentifier'>;

  /**
   * Transition type.
   */
  export const enum TransitionType {
    Link = 'link',
    Typed = 'typed',
    Address_bar = 'address_bar',
    Auto_bookmark = 'auto_bookmark',
    Auto_subframe = 'auto_subframe',
    Manual_subframe = 'manual_subframe',
    Generated = 'generated',
    Auto_toplevel = 'auto_toplevel',
    Form_submit = 'form_submit',
    Reload = 'reload',
    Keyword = 'keyword',
    Keyword_generated = 'keyword_generated',
    Other = 'other',
  }

  /**
   * Navigation history entry.
   */
  export interface NavigationEntry {
    /**
     * Unique id of the navigation history entry.
     */
    id: integer;
    /**
     * URL of the navigation history entry.
     */
    url: string;
    /**
     * URL that the user typed in the url bar.
     */
    userTypedURL: string;
    /**
     * Title of the navigation history entry.
     */
    title: string;
    /**
     * Transition type.
     */
    transitionType: TransitionType;
  }

  /**
   * Screencast frame metadata.
   */
  export interface ScreencastFrameMetadata {
    /**
     * Top offset in DIP.
     */
    offsetTop: number;
    /**
     * Page scale factor.
     */
    pageScaleFactor: number;
    /**
     * Device screen width in DIP.
     */
    deviceWidth: number;
    /**
     * Device screen height in DIP.
     */
    deviceHeight: number;
    /**
     * Position of horizontal scroll in CSS pixels.
     */
    scrollOffsetX: number;
    /**
     * Position of vertical scroll in CSS pixels.
     */
    scrollOffsetY: number;
    /**
     * Frame swap timestamp.
     */
    timestamp?: Network.TimeSinceEpoch;
  }

  /**
   * Javascript dialog type.
   */
  export const enum DialogType {
    Alert = 'alert',
    Confirm = 'confirm',
    Prompt = 'prompt',
    Beforeunload = 'beforeunload',
  }

  /**
   * Error while paring app manifest.
   */
  export interface AppManifestError {
    /**
     * Error message.
     */
    message: string;
    /**
     * If criticial, this is a non-recoverable parse error.
     */
    critical: integer;
    /**
     * Error line.
     */
    line: integer;
    /**
     * Error column.
     */
    column: integer;
  }

  /**
   * Parsed app manifest properties.
   */
  export interface AppManifestParsedProperties {
    /**
     * Computed scope value
     */
    scope: string;
  }

  /**
   * Layout viewport position and dimensions.
   */
  export interface LayoutViewport {
    /**
     * Horizontal offset relative to the document (CSS pixels).
     */
    pageX: integer;
    /**
     * Vertical offset relative to the document (CSS pixels).
     */
    pageY: integer;
    /**
     * Width (CSS pixels), excludes scrollbar if present.
     */
    clientWidth: integer;
    /**
     * Height (CSS pixels), excludes scrollbar if present.
     */
    clientHeight: integer;
  }

  /**
   * Visual viewport position, dimensions, and scale.
   */
  export interface VisualViewport {
    /**
     * Horizontal offset relative to the layout viewport (CSS pixels).
     */
    offsetX: number;
    /**
     * Vertical offset relative to the layout viewport (CSS pixels).
     */
    offsetY: number;
    /**
     * Horizontal offset relative to the document (CSS pixels).
     */
    pageX: number;
    /**
     * Vertical offset relative to the document (CSS pixels).
     */
    pageY: number;
    /**
     * Width (CSS pixels), excludes scrollbar if present.
     */
    clientWidth: number;
    /**
     * Height (CSS pixels), excludes scrollbar if present.
     */
    clientHeight: number;
    /**
     * Scale relative to the ideal viewport (size at width=device-width).
     */
    scale: number;
    /**
     * Page zoom factor (CSS to device independent pixels ratio).
     */
    zoom?: number;
  }

  /**
   * Viewport for capturing screenshot.
   */
  export interface Viewport {
    /**
     * X offset in device independent pixels (dip).
     */
    x: number;
    /**
     * Y offset in device independent pixels (dip).
     */
    y: number;
    /**
     * Rectangle width in device independent pixels (dip).
     */
    width: number;
    /**
     * Rectangle height in device independent pixels (dip).
     */
    height: number;
    /**
     * Page scale factor.
     */
    scale: number;
  }

  /**
   * Generic font families collection.
   */
  export interface FontFamilies {
    /**
     * The standard font-family.
     */
    standard?: string;
    /**
     * The fixed font-family.
     */
    fixed?: string;
    /**
     * The serif font-family.
     */
    serif?: string;
    /**
     * The sansSerif font-family.
     */
    sansSerif?: string;
    /**
     * The cursive font-family.
     */
    cursive?: string;
    /**
     * The fantasy font-family.
     */
    fantasy?: string;
    /**
     * The math font-family.
     */
    math?: string;
  }

  /**
   * Font families collection for a script.
   */
  export interface ScriptFontFamilies {
    /**
     * Name of the script which these font families are defined for.
     */
    script: string;
    /**
     * Generic font families collection for the script.
     */
    fontFamilies: FontFamilies;
  }

  /**
   * Default font sizes.
   */
  export interface FontSizes {
    /**
     * Default standard font size.
     */
    standard?: integer;
    /**
     * Default fixed font size.
     */
    fixed?: integer;
  }

  export const enum ClientNavigationReason {
    FormSubmissionGet = 'formSubmissionGet',
    FormSubmissionPost = 'formSubmissionPost',
    HttpHeaderRefresh = 'httpHeaderRefresh',
    ScriptInitiated = 'scriptInitiated',
    MetaTagRefresh = 'metaTagRefresh',
    PageBlockInterstitial = 'pageBlockInterstitial',
    Reload = 'reload',
    AnchorClick = 'anchorClick',
  }

  export const enum ClientNavigationDisposition {
    CurrentTab = 'currentTab',
    NewTab = 'newTab',
    NewWindow = 'newWindow',
    Download = 'download',
  }

  export interface InstallabilityErrorArgument {
    /**
     * Argument name (e.g. name:'minimum-icon-size-in-pixels').
     */
    name: string;
    /**
     * Argument value (e.g. value:'64').
     */
    value: string;
  }

  /**
   * The installability error
   */
  export interface InstallabilityError {
    /**
     * The error id (e.g. 'manifest-missing-suitable-icon').
     */
    errorId: string;
    /**
     * The list of error arguments (e.g. {name:'minimum-icon-size-in-pixels', value:'64'}).
     */
    errorArguments: InstallabilityErrorArgument[];
  }

  /**
   * The referring-policy used for the navigation.
   */
  export const enum ReferrerPolicy {
    NoReferrer = 'noReferrer',
    NoReferrerWhenDowngrade = 'noReferrerWhenDowngrade',
    Origin = 'origin',
    OriginWhenCrossOrigin = 'originWhenCrossOrigin',
    SameOrigin = 'sameOrigin',
    StrictOrigin = 'strictOrigin',
    StrictOriginWhenCrossOrigin = 'strictOriginWhenCrossOrigin',
    UnsafeUrl = 'unsafeUrl',
  }

  /**
   * Per-script compilation cache parameters for `Page.produceCompilationCache`
   */
  export interface CompilationCacheParams {
    /**
     * The URL of the script to produce a compilation cache entry for.
     */
    url: string;
    /**
     * A hint to the backend whether eager compilation is recommended.
     * (the actual compilation mode used is upon backend discretion).
     */
    eager?: boolean;
  }

  /**
   * The type of a frameNavigated event.
   */
  export const enum NavigationType {
    Navigation = 'Navigation',
    BackForwardCacheRestore = 'BackForwardCacheRestore',
  }

  /**
   * List of not restored reasons for back-forward cache.
   */
  export const enum BackForwardCacheNotRestoredReason {
    NotPrimaryMainFrame = 'NotPrimaryMainFrame',
    BackForwardCacheDisabled = 'BackForwardCacheDisabled',
    RelatedActiveContentsExist = 'RelatedActiveContentsExist',
    HTTPStatusNotOK = 'HTTPStatusNotOK',
    SchemeNotHTTPOrHTTPS = 'SchemeNotHTTPOrHTTPS',
    Loading = 'Loading',
    WasGrantedMediaAccess = 'WasGrantedMediaAccess',
    DisableForRenderFrameHostCalled = 'DisableForRenderFrameHostCalled',
    DomainNotAllowed = 'DomainNotAllowed',
    HTTPMethodNotGET = 'HTTPMethodNotGET',
    SubframeIsNavigating = 'SubframeIsNavigating',
    Timeout = 'Timeout',
    CacheLimit = 'CacheLimit',
    JavaScriptExecution = 'JavaScriptExecution',
    RendererProcessKilled = 'RendererProcessKilled',
    RendererProcessCrashed = 'RendererProcessCrashed',
    SchedulerTrackedFeatureUsed = 'SchedulerTrackedFeatureUsed',
    ConflictingBrowsingInstance = 'ConflictingBrowsingInstance',
    CacheFlushed = 'CacheFlushed',
    ServiceWorkerVersionActivation = 'ServiceWorkerVersionActivation',
    SessionRestored = 'SessionRestored',
    ServiceWorkerPostMessage = 'ServiceWorkerPostMessage',
    EnteredBackForwardCacheBeforeServiceWorkerHostAdded = 'EnteredBackForwardCacheBeforeServiceWorkerHostAdded',
    RenderFrameHostReused_SameSite = 'RenderFrameHostReused_SameSite',
    RenderFrameHostReused_CrossSite = 'RenderFrameHostReused_CrossSite',
    ServiceWorkerClaim = 'ServiceWorkerClaim',
    IgnoreEventAndEvict = 'IgnoreEventAndEvict',
    HaveInnerContents = 'HaveInnerContents',
    TimeoutPuttingInCache = 'TimeoutPuttingInCache',
    BackForwardCacheDisabledByLowMemory = 'BackForwardCacheDisabledByLowMemory',
    BackForwardCacheDisabledByCommandLine = 'BackForwardCacheDisabledByCommandLine',
    NetworkRequestDatAPIpeDrainedAsBytesConsumer = 'NetworkRequestDatapipeDrainedAsBytesConsumer',
    NetworkRequestRedirected = 'NetworkRequestRedirected',
    NetworkRequestTimeout = 'NetworkRequestTimeout',
    NetworkExceedsBufferLimit = 'NetworkExceedsBufferLimit',
    NavigationCancelledWhileRestoring = 'NavigationCancelledWhileRestoring',
    NotMostRecentNavigationEntry = 'NotMostRecentNavigationEntry',
    BackForwardCacheDisabledForPrerender = 'BackForwardCacheDisabledForPrerender',
    UserAgentOverrideDiffers = 'UserAgentOverrideDiffers',
    ForegroundCacheLimit = 'ForegroundCacheLimit',
    BrowsingInstanceNotSwapped = 'BrowsingInstanceNotSwapped',
    BackForwardCacheDisabledForDelegate = 'BackForwardCacheDisabledForDelegate',
    UnloadHandlerExistsInMainFrame = 'UnloadHandlerExistsInMainFrame',
    UnloadHandlerExistsInSubFrame = 'UnloadHandlerExistsInSubFrame',
    ServiceWorkerUnregistration = 'ServiceWorkerUnregistration',
    CacheControlNoStore = 'CacheControlNoStore',
    CacheControlNoStoreCookieModified = 'CacheControlNoStoreCookieModified',
    CacheControlNoStoreHTTPOnlyCookieModified = 'CacheControlNoStoreHTTPOnlyCookieModified',
    NoResponseHead = 'NoResponseHead',
    Unknown = 'Unknown',
    ActivationNavigationsDisallowedForBug1234857 = 'ActivationNavigationsDisallowedForBug1234857',
    ErrorDocument = 'ErrorDocument',
    FencedFramesEmbedder = 'FencedFramesEmbedder',
    WebSocket = 'WebSocket',
    WebTransport = 'WebTransport',
    WebRTC = 'WebRTC',
    MainResourceHasCacheControlNoStore = 'MainResourceHasCacheControlNoStore',
    MainResourceHasCacheControlNoCache = 'MainResourceHasCacheControlNoCache',
    SubresourceHasCacheControlNoStore = 'SubresourceHasCacheControlNoStore',
    SubresourceHasCacheControlNoCache = 'SubresourceHasCacheControlNoCache',
    ContainsPlugins = 'ContainsPlugins',
    DocumentLoaded = 'DocumentLoaded',
    DedicatedWorkerOrWorklet = 'DedicatedWorkerOrWorklet',
    OutstandingNetworkRequestOthers = 'OutstandingNetworkRequestOthers',
    OutstandingIndexedDBTransaction = 'OutstandingIndexedDBTransaction',
    RequestedNotificationsPermission = 'RequestedNotificationsPermission',
    RequestedMIDIPermission = 'RequestedMIDIPermission',
    RequestedAudioCapturePermission = 'RequestedAudioCapturePermission',
    RequestedVideoCapturePermission = 'RequestedVideoCapturePermission',
    RequestedBackForwardCacheBlockedSensors = 'RequestedBackForwardCacheBlockedSensors',
    RequestedBackgroundWorkPermission = 'RequestedBackgroundWorkPermission',
    BroadcastChannel = 'BroadcastChannel',
    IndexedDBConnection = 'IndexedDBConnection',
    WebXR = 'WebXR',
    SharedWorker = 'SharedWorker',
    WebLocks = 'WebLocks',
    WebHID = 'WebHID',
    WebShare = 'WebShare',
    RequestedStorageAccessGrant = 'RequestedStorageAccessGrant',
    WebNfc = 'WebNfc',
    OutstandingNetworkRequestFetch = 'OutstandingNetworkRequestFetch',
    OutstandingNetworkRequestXHR = 'OutstandingNetworkRequestXHR',
    AppBanner = 'AppBanner',
    Printing = 'Printing',
    WebDatabase = 'WebDatabase',
    PictureInPicture = 'PictureInPicture',
    Portal = 'Portal',
    SpeechRecognizer = 'SpeechRecognizer',
    IdleManager = 'IdleManager',
    PaymentManager = 'PaymentManager',
    SpeechSynthesis = 'SpeechSynthesis',
    KeyboardLock = 'KeyboardLock',
    WebOTPService = 'WebOTPService',
    OutstandingNetworkRequestDirectSocket = 'OutstandingNetworkRequestDirectSocket',
    InjectedJavascript = 'InjectedJavascript',
    InjectedStyleSheet = 'InjectedStyleSheet',
    Dummy = 'Dummy',
    ContentSecurityHandler = 'ContentSecurityHandler',
    ContentWebAuthenticationAPI = 'ContentWebAuthenticationAPI',
    ContentFileChooser = 'ContentFileChooser',
    ContentSerial = 'ContentSerial',
    ContentFileSystemAccess = 'ContentFileSystemAccess',
    ContentMediaDevicesDispatcherHost = 'ContentMediaDevicesDispatcherHost',
    ContentWebBluetooth = 'ContentWebBluetooth',
    ContentWebUSB = 'ContentWebUSB',
    ContentMediaSessionService = 'ContentMediaSessionService',
    ContentScreenReader = 'ContentScreenReader',
    EmbedderPopupBlockerTabHelper = 'EmbedderPopupBlockerTabHelper',
    EmbedderSafeBrowsingTriggeredPopupBlocker = 'EmbedderSafeBrowsingTriggeredPopupBlocker',
    EmbedderSafeBrowsingThreatDetails = 'EmbedderSafeBrowsingThreatDetails',
    EmbedderAppBannerManager = 'EmbedderAppBannerManager',
    EmbedderDomDistillerViewerSource = 'EmbedderDomDistillerViewerSource',
    EmbedderDomDistillerSelfDeletingRequestDelegate = 'EmbedderDomDistillerSelfDeletingRequestDelegate',
    EmbedderOomInterventionTabHelper = 'EmbedderOomInterventionTabHelper',
    EmbedderOfflinePage = 'EmbedderOfflinePage',
    EmbedderChromePasswordManagerClientBindCredentialManager = 'EmbedderChromePasswordManagerClientBindCredentialManager',
    EmbedderPermissionRequestManager = 'EmbedderPermissionRequestManager',
    EmbedderModalDialog = 'EmbedderModalDialog',
    EmbedderExtensions = 'EmbedderExtensions',
    EmbedderExtensionMessaging = 'EmbedderExtensionMessaging',
    EmbedderExtensionMessagingForOpenPort = 'EmbedderExtensionMessagingForOpenPort',
    EmbedderExtensionSentMessageToCachedFrame = 'EmbedderExtensionSentMessageToCachedFrame',
  }

  /**
   * Types of not restored reasons for back-forward cache.
   */
  export const enum BackForwardCacheNotRestoredReasonType {
    SupportPending = 'SupportPending',
    PageSupportNeeded = 'PageSupportNeeded',
    Circumstantial = 'Circumstantial',
  }

  export interface BackForwardCacheNotRestoredExplanation {
    /**
     * Type of the reason
     */
    type: BackForwardCacheNotRestoredReasonType;
    /**
     * Not restored reason
     */
    reason: BackForwardCacheNotRestoredReason;
    /**
     * Context associated with the reason. The meaning of this context is
     * dependent on the reason:
     * - EmbedderExtensionSentMessageToCachedFrame: the extension ID.
     */
    context?: string;
  }

  export interface BackForwardCacheNotRestoredExplanationTree {
    /**
     * URL of each frame
     */
    url: string;
    /**
     * Not restored reasons of each frame
     */
    explanations: BackForwardCacheNotRestoredExplanation[];
    /**
     * Array of children frame
     */
    children: BackForwardCacheNotRestoredExplanationTree[];
  }

  /**
   * List of FinalStatus reasons for Prerender2.
   */
  export const enum PrerenderFinalStatus {
    Activated = 'Activated',
    Destroyed = 'Destroyed',
    LowEndDevice = 'LowEndDevice',
    CrossOriginRedirect = 'CrossOriginRedirect',
    CrossOriginNavigation = 'CrossOriginNavigation',
    InvalidSchemeRedirect = 'InvalidSchemeRedirect',
    InvalidSchemeNavigation = 'InvalidSchemeNavigation',
    InProgressNavigation = 'InProgressNavigation',
    NavigationRequestBlockedByCsp = 'NavigationRequestBlockedByCsp',
    MainFrameNavigation = 'MainFrameNavigation',
    MojoBinderPolicy = 'MojoBinderPolicy',
    RendererProcessCrashed = 'RendererProcessCrashed',
    RendererProcessKilled = 'RendererProcessKilled',
    Download = 'Download',
    TriggerDestroyed = 'TriggerDestroyed',
    NavigationNotCommitted = 'NavigationNotCommitted',
    NavigationBadHttpStatus = 'NavigationBadHttpStatus',
    ClientCertRequested = 'ClientCertRequested',
    NavigationRequestNetworkError = 'NavigationRequestNetworkError',
    MaxNumOfRunningPrerendersExceeded = 'MaxNumOfRunningPrerendersExceeded',
    CancelAllHostsForTesting = 'CancelAllHostsForTesting',
    DidFailLoad = 'DidFailLoad',
    Stop = 'Stop',
    SslCertificateError = 'SslCertificateError',
    LoginAuthRequested = 'LoginAuthRequested',
    UaChangeRequiresReload = 'UaChangeRequiresReload',
    BlockedByClient = 'BlockedByClient',
    AudioOutputDeviceRequested = 'AudioOutputDeviceRequested',
    MixedContent = 'MixedContent',
    TriggerBackgrounded = 'TriggerBackgrounded',
    EmbedderTriggeredAndSameOriginRedirected = 'EmbedderTriggeredAndSameOriginRedirected',
    EmbedderTriggeredAndCrossOriginRedirected = 'EmbedderTriggeredAndCrossOriginRedirected',
    EmbedderTriggeredAndDestroyed = 'EmbedderTriggeredAndDestroyed',
    MemoryLimitExceeded = 'MemoryLimitExceeded',
    FailToGetMemoryUsage = 'FailToGetMemoryUsage',
  }

  export interface AddScriptToEvaluateOnLoadRequest {
    scriptSource: string;
  }

  export interface AddScriptToEvaluateOnLoadResponse extends ProtocolResponseWithError {
    /**
     * Identifier of the added script.
     */
    identifier: ScriptIdentifier;
  }

  export interface AddScriptToEvaluateOnNewDocumentRequest {
    source: string;
    /**
     * If specified, creates an isolated world with the given name and evaluates given script in it.
     * This world name will be used as the ExecutionContextDescription::name when the corresponding
     * event is emitted.
     */
    worldName?: string;
    /**
     * Specifies whether command line API should be available to the script, defaults
     * to false.
     */
    includeCommandLineAPI?: boolean;
  }

  export interface AddScriptToEvaluateOnNewDocumentResponse extends ProtocolResponseWithError {
    /**
     * Identifier of the added script.
     */
    identifier: ScriptIdentifier;
  }

  export const enum CaptureScreenshotRequestFormat {
    Jpeg = 'jpeg',
    Png = 'png',
    Webp = 'webp',
  }

  export interface CaptureScreenshotRequest {
    /**
     * Image compression format (defaults to png).
     */
    format?: CaptureScreenshotRequestFormat;
    /**
     * Compression quality from range [0..100] (jpeg only).
     */
    quality?: integer;
    /**
     * Capture the screenshot of a given region only.
     */
    clip?: Viewport;
    /**
     * Capture the screenshot from the surface, rather than the view. Defaults to true.
     */
    fromSurface?: boolean;
    /**
     * Capture the screenshot beyond the viewport. Defaults to false.
     */
    captureBeyondViewport?: boolean;
  }

  export interface CaptureScreenshotResponse extends ProtocolResponseWithError {
    /**
     * Base64-encoded image data.
     */
    data: binary;
  }

  export const enum CaptureSnapshotRequestFormat {
    MHTML = 'mhtml',
  }

  export interface CaptureSnapshotRequest {
    /**
     * Format (defaults to mhtml).
     */
    format?: CaptureSnapshotRequestFormat;
  }

  export interface CaptureSnapshotResponse extends ProtocolResponseWithError {
    /**
     * Serialized page data.
     */
    data: string;
  }

  export interface CreateIsolatedWorldRequest {
    /**
     * Id of the frame in which the isolated world should be created.
     */
    frameId: FrameId;
    /**
     * An optional name which is reported in the Execution Context.
     */
    worldName?: string;
    /**
     * Whether or not universal access should be granted to the isolated world. This is a powerful
     * option, use with caution.
     */
    grantUniveralAccess?: boolean;
  }

  export interface CreateIsolatedWorldResponse extends ProtocolResponseWithError {
    /**
     * Execution context of the isolated world.
     */
    executionContextId: Runtime.ExecutionContextId;
  }

  export interface DeleteCookieRequest {
    /**
     * Name of the cookie to remove.
     */
    cookieName: string;
    /**
     * URL to match cooke domain and path.
     */
    url: string;
  }

  export interface GetAppManifestResponse extends ProtocolResponseWithError {
    /**
     * Manifest location.
     */
    url: string;
    errors: AppManifestError[];
    /**
     * Manifest content.
     */
    data?: string;
    /**
     * Parsed manifest properties
     */
    parsed?: AppManifestParsedProperties;
  }

  export interface GetInstallabilityErrorsResponse extends ProtocolResponseWithError {
    installabilityErrors: InstallabilityError[];
  }

  export interface GetManifestIconsResponse extends ProtocolResponseWithError {
    primaryIcon?: binary;
  }

  export interface GetAppIdResponse extends ProtocolResponseWithError {
    /**
     * App id, either from manifest's id attribute or computed from start_url
     */
    appId?: string;
    /**
     * Recommendation for manifest's id attribute to match current id computed from start_url
     */
    recommendedId?: string;
  }

  export interface GetCookiesResponse extends ProtocolResponseWithError {
    /**
     * Array of cookie objects.
     */
    cookies: Network.Cookie[];
  }

  export interface GetFrameTreeResponse extends ProtocolResponseWithError {
    /**
     * Present frame tree structure.
     */
    frameTree: FrameTree;
  }

  export interface GetLayoutMetricsResponse extends ProtocolResponseWithError {
    /**
     * Deprecated metrics relating to the layout viewport. Is in device pixels. Use `cssLayoutViewport` instead.
     */
    layoutViewport: LayoutViewport;
    /**
     * Deprecated metrics relating to the visual viewport. Is in device pixels. Use `cssVisualViewport` instead.
     */
    visualViewport: VisualViewport;
    /**
     * Deprecated size of scrollable area. Is in DP. Use `cssContentSize` instead.
     */
    contentSize: DOM.Rect;
    /**
     * Metrics relating to the layout viewport in CSS pixels.
     */
    cssLayoutViewport: LayoutViewport;
    /**
     * Metrics relating to the visual viewport in CSS pixels.
     */
    cssVisualViewport: VisualViewport;
    /**
     * Size of scrollable area in CSS pixels.
     */
    cssContentSize: DOM.Rect;
  }

  export interface GetNavigationHistoryResponse extends ProtocolResponseWithError {
    /**
     * Index of the current navigation history entry.
     */
    currentIndex: integer;
    /**
     * Array of navigation history entries.
     */
    entries: NavigationEntry[];
  }

  export interface GetResourceContentRequest {
    /**
     * Frame id to get resource for.
     */
    frameId: FrameId;
    /**
     * URL of the resource to get content for.
     */
    url: string;
  }

  export interface GetResourceContentResponse extends ProtocolResponseWithError {
    /**
     * Resource content.
     */
    content: string;
    /**
     * True, if content was served as base64.
     */
    base64Encoded: boolean;
  }

  export interface GetResourceTreeResponse extends ProtocolResponseWithError {
    /**
     * Present frame / resource tree structure.
     */
    frameTree: FrameResourceTree;
  }

  export interface HandleJavaScriptDialogRequest {
    /**
     * Whether to accept or dismiss the dialog.
     */
    accept: boolean;
    /**
     * The text to enter into the dialog prompt before accepting. Used only if this is a prompt
     * dialog.
     */
    promptText?: string;
  }

  export interface NavigateRequest {
    /**
     * URL to navigate the page to.
     */
    url: string;
    /**
     * Referrer URL.
     */
    referrer?: string;
    /**
     * Intended transition type.
     */
    transitionType?: TransitionType;
    /**
     * Frame id to navigate, if not specified navigates the top frame.
     */
    frameId?: FrameId;
    /**
     * Referrer-policy used for the navigation.
     */
    referrerPolicy?: ReferrerPolicy;
  }

  export interface NavigateResponse extends ProtocolResponseWithError {
    /**
     * Frame id that has navigated (or failed to navigate)
     */
    frameId: FrameId;
    /**
     * Loader identifier. This is omitted in case of same-document navigation,
     * as the previously committed loaderId would not change.
     */
    loaderId?: Network.LoaderId;
    /**
     * User friendly error message, present if and only if navigation has failed.
     */
    errorText?: string;
  }

  export interface NavigateToHistoryEntryRequest {
    /**
     * Unique id of the entry to navigate to.
     */
    entryId: integer;
  }

  export const enum PrintToPDFRequestTransferMode {
    ReturnAsBase64 = 'ReturnAsBase64',
    ReturnAsStream = 'ReturnAsStream',
  }

  export interface PrintToPDFRequest {
    /**
     * Paper orientation. Defaults to false.
     */
    landscape?: boolean;
    /**
     * Display header and footer. Defaults to false.
     */
    displayHeaderFooter?: boolean;
    /**
     * Print background graphics. Defaults to false.
     */
    printBackground?: boolean;
    /**
     * Scale of the webpage rendering. Defaults to 1.
     */
    scale?: number;
    /**
     * Paper width in inches. Defaults to 8.5 inches.
     */
    paperWidth?: number;
    /**
     * Paper height in inches. Defaults to 11 inches.
     */
    paperHeight?: number;
    /**
     * Top margin in inches. Defaults to 1cm (~0.4 inches).
     */
    marginTop?: number;
    /**
     * Bottom margin in inches. Defaults to 1cm (~0.4 inches).
     */
    marginBottom?: number;
    /**
     * Left margin in inches. Defaults to 1cm (~0.4 inches).
     */
    marginLeft?: number;
    /**
     * Right margin in inches. Defaults to 1cm (~0.4 inches).
     */
    marginRight?: number;
    /**
     * Paper ranges to print, one based, e.g., '1-5, 8, 11-13'. Pages are
     * printed in the document order, not in the order specified, and no
     * more than once.
     * Defaults to empty string, which implies the entire document is printed.
     * The page numbers are quietly capped to actual page count of the
     * document, and ranges beyond the end of the document are ignored.
     * If this results in no pages to print, an error is reported.
     * It is an error to specify a range with start greater than end.
     */
    pageRanges?: string;
    /**
     * HTML template for the print header. Should be valid HTML markup with following
     * classes used to inject printing values into them:
     * - `date`: formatted print date
     * - `title`: document title
     * - `url`: document location
     * - `pageNumber`: current page number
     * - `totalPages`: total pages in the document
     *
     * For example, `<span class=title></span>` would generate span containing the title.
     */
    headerTemplate?: string;
    /**
     * HTML template for the print footer. Should use the same format as the `headerTemplate`.
     */
    footerTemplate?: string;
    /**
     * Whether or not to prefer page size as defined by css. Defaults to false,
     * in which case the content will be scaled to fit the paper size.
     */
    preferCSSPageSize?: boolean;
    /**
     * return as stream
     */
    transferMode?: PrintToPDFRequestTransferMode;
  }

  export interface PrintToPDFResponse extends ProtocolResponseWithError {
    /**
     * Base64-encoded pdf data. Empty if |returnAsStream| is specified.
     */
    data: binary;
    /**
     * A handle of the stream that holds resulting PDF data.
     */
    stream?: IO.StreamHandle;
  }

  export interface ReloadRequest {
    /**
     * If true, browser cache is ignored (as if the user pressed Shift+refresh).
     */
    ignoreCache?: boolean;
    /**
     * If set, the script will be injected into all frames of the inspected page after reload.
     * Argument will be ignored if reloading dataURL origin.
     */
    scriptToEvaluateOnLoad?: string;
  }

  export interface RemoveScriptToEvaluateOnLoadRequest {
    identifier: ScriptIdentifier;
  }

  export interface RemoveScriptToEvaluateOnNewDocumentRequest {
    identifier: ScriptIdentifier;
  }

  export interface ScreencastFrameAckRequest {
    /**
     * Frame number.
     */
    sessionId: integer;
  }

  export interface SearchInResourceRequest {
    /**
     * Frame id for resource to search in.
     */
    frameId: FrameId;
    /**
     * URL of the resource to search in.
     */
    url: string;
    /**
     * String to search for.
     */
    query: string;
    /**
     * If true, search is case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * If true, treats string parameter as regex.
     */
    isRegex?: boolean;
  }

  export interface SearchInResourceResponse extends ProtocolResponseWithError {
    /**
     * List of search matches.
     */
    result: Debugger.SearchMatch[];
  }

  export interface SetAdBlockingEnabledRequest {
    /**
     * Whether to block ads.
     */
    enabled: boolean;
  }

  export interface SetBypassCSPRequest {
    /**
     * Whether to bypass page CSP.
     */
    enabled: boolean;
  }

  export interface GetPermissionsPolicyStateRequest {
    frameId: FrameId;
  }

  export interface GetPermissionsPolicyStateResponse extends ProtocolResponseWithError {
    states: PermissionsPolicyFeatureState[];
  }

  export interface GetOriginTrialsRequest {
    frameId: FrameId;
  }

  export interface GetOriginTrialsResponse extends ProtocolResponseWithError {
    originTrials: OriginTrial[];
  }

  export interface SetDeviceMetricsOverrideRequest {
    /**
     * Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.
     */
    width: integer;
    /**
     * Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.
     */
    height: integer;
    /**
     * Overriding device scale factor value. 0 disables the override.
     */
    deviceScaleFactor: number;
    /**
     * Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
     * autosizing and more.
     */
    mobile: boolean;
    /**
     * Scale to apply to resulting view image.
     */
    scale?: number;
    /**
     * Overriding screen width value in pixels (minimum 0, maximum 10000000).
     */
    screenWidth?: integer;
    /**
     * Overriding screen height value in pixels (minimum 0, maximum 10000000).
     */
    screenHeight?: integer;
    /**
     * Overriding view X position on screen in pixels (minimum 0, maximum 10000000).
     */
    positionX?: integer;
    /**
     * Overriding view Y position on screen in pixels (minimum 0, maximum 10000000).
     */
    positionY?: integer;
    /**
     * Do not set visible view size, rely upon explicit setVisibleSize call.
     */
    dontSetVisibleSize?: boolean;
    /**
     * Screen orientation override.
     */
    screenOrientation?: Emulation.ScreenOrientation;
    /**
     * The viewport dimensions and scale. If not set, the override is cleared.
     */
    viewport?: Viewport;
  }

  export interface SetDeviceOrientationOverrideRequest {
    /**
     * Mock alpha
     */
    alpha: number;
    /**
     * Mock beta
     */
    beta: number;
    /**
     * Mock gamma
     */
    gamma: number;
  }

  export interface SetFontFamiliesRequest {
    /**
     * Specifies font families to set. If a font family is not specified, it won't be changed.
     */
    fontFamilies: FontFamilies;
    /**
     * Specifies font families to set for individual scripts.
     */
    forScripts?: ScriptFontFamilies[];
  }

  export interface SetFontSizesRequest {
    /**
     * Specifies font sizes to set. If a font size is not specified, it won't be changed.
     */
    fontSizes: FontSizes;
  }

  export interface SetDocumentContentRequest {
    /**
     * Frame id to set HTML for.
     */
    frameId: FrameId;
    /**
     * HTML content to set.
     */
    html: string;
  }

  export const enum SetDownloadBehaviorRequestBehavior {
    Deny = 'deny',
    Allow = 'allow',
    Default = 'default',
  }

  export interface SetDownloadBehaviorRequest {
    /**
     * Whether to allow all or deny all download requests, or use default Chrome behavior if
     * available (otherwise deny).
     */
    behavior: SetDownloadBehaviorRequestBehavior;
    /**
     * The default path to save downloaded files to. This is required if behavior is set to 'allow'
     */
    downloadPath?: string;
  }

  export interface SetGeolocationOverrideRequest {
    /**
     * Mock latitude
     */
    latitude?: number;
    /**
     * Mock longitude
     */
    longitude?: number;
    /**
     * Mock accuracy
     */
    accuracy?: number;
  }

  export interface SetLifecycleEventsEnabledRequest {
    /**
     * If true, starts emitting lifecycle events.
     */
    enabled: boolean;
  }

  export const enum SetTouchEmulationEnabledRequestConfiguration {
    Mobile = 'mobile',
    Desktop = 'desktop',
  }

  export interface SetTouchEmulationEnabledRequest {
    /**
     * Whether the touch event emulation should be enabled.
     */
    enabled: boolean;
    /**
     * Touch/gesture events configuration. Default: current platform.
     */
    configuration?: SetTouchEmulationEnabledRequestConfiguration;
  }

  export const enum StartScreencastRequestFormat {
    Jpeg = 'jpeg',
    Png = 'png',
  }

  export interface StartScreencastRequest {
    /**
     * Image compression format.
     */
    format?: StartScreencastRequestFormat;
    /**
     * Compression quality from range [0..100].
     */
    quality?: integer;
    /**
     * Maximum screenshot width.
     */
    maxWidth?: integer;
    /**
     * Maximum screenshot height.
     */
    maxHeight?: integer;
    /**
     * Send every n-th frame.
     */
    everyNthFrame?: integer;
  }

  export const enum SetWebLifecycleStateRequestState {
    Frozen = 'frozen',
    Active = 'active',
  }

  export interface SetWebLifecycleStateRequest {
    /**
     * Target lifecycle state
     */
    state: SetWebLifecycleStateRequestState;
  }

  export interface ProduceCompilationCacheRequest {
    scripts: CompilationCacheParams[];
  }

  export interface AddCompilationCacheRequest {
    url: string;
    /**
     * Base64-encoded data
     */
    data: binary;
  }

  export const enum SetSPCTransactionModeRequestMode {
    None = 'none',
    Autoaccept = 'autoaccept',
    Autoreject = 'autoreject',
  }

  export interface SetSPCTransactionModeRequest {
    mode: SetSPCTransactionModeRequestMode;
  }

  export interface GenerateTestReportRequest {
    /**
     * Message to be displayed in the report.
     */
    message: string;
    /**
     * Specifies the endpoint group to deliver the report to.
     */
    group?: string;
  }

  export interface SetInterceptFileChooserDialogRequest {
    enabled: boolean;
  }

  export interface DomContentEventFiredEvent {
    timestamp: Network.MonotonicTime;
  }

  export const enum FileChooserOpenedEventMode {
    SelectSingle = 'selectSingle',
    SelectMultiple = 'selectMultiple',
  }

  /**
   * Emitted only when `page.interceptFileChooser` is enabled.
   */
  export interface FileChooserOpenedEvent {
    /**
     * Id of the frame containing input node.
     */
    frameId: FrameId;
    /**
     * Input mode.
     */
    mode: FileChooserOpenedEventMode;
    /**
     * Input node id. Only present for file choosers opened via an <input type="file"> element.
     */
    backendNodeId?: DOM.BackendNodeId;
  }

  /**
   * Fired when frame has been attached to its parent.
   */
  export interface FrameAttachedEvent {
    /**
     * Id of the frame that has been attached.
     */
    frameId: FrameId;
    /**
     * Parent frame identifier.
     */
    parentFrameId: FrameId;
    /**
     * JavaScript stack trace of when frame was attached, only set if frame initiated from script.
     */
    stack?: Runtime.StackTrace;
    /**
     * Identifies the bottom-most script which caused the frame to be labelled
     * as an ad. Only sent if frame is labelled as an ad and id is available.
     */
    adScriptId?: AdScriptId;
  }

  /**
   * Fired when frame no longer has a scheduled navigation.
   */
  export interface FrameClearedScheduledNavigationEvent {
    /**
     * Id of the frame that has cleared its scheduled navigation.
     */
    frameId: FrameId;
  }

  export const enum FrameDetachedEventReason {
    Remove = 'remove',
    Swap = 'swap',
  }

  /**
   * Fired when frame has been detached from its parent.
   */
  export interface FrameDetachedEvent {
    /**
     * Id of the frame that has been detached.
     */
    frameId: FrameId;
    reason: FrameDetachedEventReason;
  }

  /**
   * Fired once navigation of the frame has completed. Frame is now associated with the new loader.
   */
  export interface FrameNavigatedEvent {
    /**
     * Frame object.
     */
    frame: Frame;
    type: NavigationType;
  }

  /**
   * Fired when opening document to write to.
   */
  export interface DocumentOpenedEvent {
    /**
     * Frame object.
     */
    frame: Frame;
  }

  /**
   * Fired when a renderer-initiated navigation is requested.
   * Navigation may still be cancelled after the event is issued.
   */
  export interface FrameRequestedNavigationEvent {
    /**
     * Id of the frame that is being navigated.
     */
    frameId: FrameId;
    /**
     * The reason for the navigation.
     */
    reason: ClientNavigationReason;
    /**
     * The destination URL for the requested navigation.
     */
    url: string;
    /**
     * The disposition for the navigation.
     */
    disposition: ClientNavigationDisposition;
  }

  /**
   * Fired when frame schedules a potential navigation.
   */
  export interface FrameScheduledNavigationEvent {
    /**
     * Id of the frame that has scheduled a navigation.
     */
    frameId: FrameId;
    /**
     * Delay (in seconds) until the navigation is scheduled to begin. The navigation is not
     * guaranteed to start.
     */
    delay: number;
    /**
     * The reason for the navigation.
     */
    reason: ClientNavigationReason;
    /**
     * The destination URL for the scheduled navigation.
     */
    url: string;
  }

  /**
   * Fired when frame has started loading.
   */
  export interface FrameStartedLoadingEvent {
    /**
     * Id of the frame that has started loading.
     */
    frameId: FrameId;
  }

  /**
   * Fired when frame has stopped loading.
   */
  export interface FrameStoppedLoadingEvent {
    /**
     * Id of the frame that has stopped loading.
     */
    frameId: FrameId;
  }

  /**
   * Fired when page is about to start a download.
   * Deprecated. Use Browser.downloadWillBegin instead.
   */
  export interface DownloadWillBeginEvent {
    /**
     * Id of the frame that caused download to begin.
     */
    frameId: FrameId;
    /**
     * Global unique identifier of the download.
     */
    guid: string;
    /**
     * URL of the resource being downloaded.
     */
    url: string;
    /**
     * Suggested file name of the resource (the actual name of the file saved on disk may differ).
     */
    suggestedFilename: string;
  }

  export const enum DownloadProgressEventState {
    InProgress = 'inProgress',
    Completed = 'completed',
    Canceled = 'canceled',
  }

  /**
   * Fired when download makes progress. Last call has |done| == true.
   * Deprecated. Use Browser.downloadProgress instead.
   */
  export interface DownloadProgressEvent {
    /**
     * Global unique identifier of the download.
     */
    guid: string;
    /**
     * Total expected bytes to download.
     */
    totalBytes: number;
    /**
     * Total bytes received.
     */
    receivedBytes: number;
    /**
     * Download status.
     */
    state: DownloadProgressEventState;
  }

  /**
   * Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been
   * closed.
   */
  export interface JavascriptDialogClosedEvent {
    /**
     * Whether dialog was confirmed.
     */
    result: boolean;
    /**
     * User input in case of prompt.
     */
    userInput: string;
  }

  /**
   * Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to
   * open.
   */
  export interface JavascriptDialogOpeningEvent {
    /**
     * Frame url.
     */
    url: string;
    /**
     * Message that will be displayed by the dialog.
     */
    message: string;
    /**
     * Dialog type.
     */
    type: DialogType;
    /**
     * True iff browser is capable showing or acting on the given dialog. When browser has no
     * dialog handler for given target, calling alert while Page domain is engaged will stall
     * the page execution. Execution can be resumed via calling Page.handleJavaScriptDialog.
     */
    hasBrowserHandler: boolean;
    /**
     * Default dialog prompt.
     */
    defaultPrompt?: string;
  }

  /**
   * Fired for top level page lifecycle events such as navigation, load, paint, etc.
   */
  export interface LifecycleEventEvent {
    /**
     * Id of the frame.
     */
    frameId: FrameId;
    /**
     * Loader identifier. Empty string if the request is fetched from worker.
     */
    loaderId: Network.LoaderId;
    name: string;
    timestamp: Network.MonotonicTime;
  }

  /**
   * Fired for failed bfcache history navigations if BackForwardCache feature is enabled. Do
   * not assume any ordering with the Page.frameNavigated event. This event is fired only for
   * main-frame history navigation where the document changes (non-same-document navigations),
   * when bfcache navigation fails.
   */
  export interface BackForwardCacheNotUsedEvent {
    /**
     * The loader id for the associated navgation.
     */
    loaderId: Network.LoaderId;
    /**
     * The frame id of the associated frame.
     */
    frameId: FrameId;
    /**
     * Array of reasons why the page could not be cached. This must not be empty.
     */
    notRestoredExplanations: BackForwardCacheNotRestoredExplanation[];
    /**
     * Tree structure of reasons why the page could not be cached for each frame.
     */
    notRestoredExplanationsTree?: BackForwardCacheNotRestoredExplanationTree;
  }

  /**
   * Fired when a prerender attempt is completed.
   */
  export interface PrerenderAttemptCompletedEvent {
    /**
     * The frame id of the frame initiating prerendering.
     */
    initiatingFrameId: FrameId;
    prerenderingUrl: string;
    finalStatus: PrerenderFinalStatus;
  }

  export interface LoadEventFiredEvent {
    timestamp: Network.MonotonicTime;
  }

  /**
   * Fired when same-document navigation happens, e.g. due to history API usage or anchor navigation.
   */
  export interface NavigatedWithinDocumentEvent {
    /**
     * Id of the frame.
     */
    frameId: FrameId;
    /**
     * Frame's new url.
     */
    url: string;
  }

  /**
   * Compressed image data requested by the `startScreencast`.
   */
  export interface ScreencastFrameEvent {
    /**
     * Base64-encoded compressed image.
     */
    data: binary;
    /**
     * Screencast frame metadata.
     */
    metadata: ScreencastFrameMetadata;
    /**
     * Frame number.
     */
    sessionId: integer;
  }

  /**
   * Fired when the page with currently enabled screencast was shown or hidden `.
   */
  export interface ScreencastVisibilityChangedEvent {
    /**
     * True if the page is visible.
     */
    visible: boolean;
  }

  /**
   * Fired when a new window is going to be opened, via window.open(), link click, form submission,
   * etc.
   */
  export interface WindowOpenEvent {
    /**
     * The URL for the new window.
     */
    url: string;
    /**
     * Window name.
     */
    windowName: string;
    /**
     * An array of enabled window features.
     */
    windowFeatures: string[];
    /**
     * Whether or not it was triggered by user gesture.
     */
    userGesture: boolean;
  }

  /**
   * Issued for every compilation cache generated. Is only available
   * if Page.setGenerateCompilationCache is enabled.
   */
  export interface CompilationCacheProducedEvent {
    url: string;
    /**
     * Base64-encoded data
     */
    data: binary;
  }
}

export namespace Performance {

  /**
   * Run-time execution metric.
   */
  export interface Metric {
    /**
     * Metric name.
     */
    name: string;
    /**
     * Metric value.
     */
    value: number;
  }

  export const enum EnableRequestTimeDomain {
    TimeTicks = 'timeTicks',
    ThreadTicks = 'threadTicks',
  }

  export interface EnableRequest {
    /**
     * Time domain to use for collecting and reporting duration metrics.
     */
    timeDomain?: EnableRequestTimeDomain;
  }

  export const enum SetTimeDomainRequestTimeDomain {
    TimeTicks = 'timeTicks',
    ThreadTicks = 'threadTicks',
  }

  export interface SetTimeDomainRequest {
    /**
     * Time domain
     */
    timeDomain: SetTimeDomainRequestTimeDomain;
  }

  export interface GetMetricsResponse extends ProtocolResponseWithError {
    /**
     * Current values for run-time metrics.
     */
    metrics: Metric[];
  }

  /**
   * Current values of the metrics.
   */
  export interface MetricsEvent {
    /**
     * Current values of the metrics.
     */
    metrics: Metric[];
    /**
     * Timestamp title.
     */
    title: string;
  }
}

/**
 * Reporting of performance timeline events, as specified in
 * https://w3c.github.io/performance-timeline/#dom-performanceobserver.
 */
export namespace PerformanceTimeline {

  /**
   * See https://github.com/WICG/LargestContentfulPaint and largest_contentful_paint.idl
   */
  export interface LargestContentfulPaint {
    renderTime: Network.TimeSinceEpoch;
    loadTime: Network.TimeSinceEpoch;
    /**
     * The number of pixels being painted.
     */
    size: number;
    /**
     * The id attribute of the element, if available.
     */
    elementId?: string;
    /**
     * The URL of the image (may be trimmed).
     */
    url?: string;
    nodeId?: DOM.BackendNodeId;
  }

  export interface LayoutShiftAttribution {
    previousRect: DOM.Rect;
    currentRect: DOM.Rect;
    nodeId?: DOM.BackendNodeId;
  }

  /**
   * See https://wicg.github.io/layout-instability/#sec-layout-shift and layout_shift.idl
   */
  export interface LayoutShift {
    /**
     * Score increment produced by this event.
     */
    value: number;
    hadRecentInput: boolean;
    lastInputTime: Network.TimeSinceEpoch;
    sources: LayoutShiftAttribution[];
  }

  export interface TimelineEvent {
    /**
     * Identifies the frame that this event is related to. Empty for non-frame targets.
     */
    frameId: Page.FrameId;
    /**
     * The event type, as specified in https://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype
     * This determines which of the optional "details" fiedls is present.
     */
    type: string;
    /**
     * Name may be empty depending on the type.
     */
    name: string;
    /**
     * Time in seconds since Epoch, monotonically increasing within document lifetime.
     */
    time: Network.TimeSinceEpoch;
    /**
     * Event duration, if applicable.
     */
    duration?: number;
    lcpDetails?: LargestContentfulPaint;
    layoutShiftDetails?: LayoutShift;
  }

  export interface EnableRequest {
    /**
     * The types of event to report, as specified in
     * https://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype
     * The specified filter overrides any previous filters, passing empty
     * filter disables recording.
     * Note that not all types exposed to the web platform are currently supported.
     */
    eventTypes: string[];
  }

  /**
   * Sent when a performance timeline event is added. See reportPerformanceTimeline method.
   */
  export interface TimelineEventAddedEvent {
    event: TimelineEvent;
  }
}

/**
 * Security
 */
export namespace Security {

  /**
   * An internal certificate ID value.
   */
  export type CertificateId = OpaqueIdentifier<integer, 'Protocol.Security.CertificateId'>;

  /**
   * A description of mixed content (HTTP resources on HTTPS pages), as defined by
   * https://www.w3.org/TR/mixed-content/#categories
   */
  export const enum MixedContentType {
    Blockable = 'blockable',
    OptionallyBlockable = 'optionally-blockable',
    None = 'none',
  }

  /**
   * The security level of a page or resource.
   */
  export const enum SecurityState {
    Unknown = 'unknown',
    Neutral = 'neutral',
    Insecure = 'insecure',
    Secure = 'secure',
    Info = 'info',
    InsecureBroken = 'insecure-broken',
  }

  /**
   * Details about the security state of the page certificate.
   */
  export interface CertificateSecurityState {
    /**
     * Protocol name (e.g. "TLS 1.2" or "QUIC").
     */
    protocol: string;
    /**
     * Key Exchange used by the connection, or the empty string if not applicable.
     */
    keyExchange: string;
    /**
     * (EC)DH group used by the connection, if applicable.
     */
    keyExchangeGroup?: string;
    /**
     * Cipher name.
     */
    cipher: string;
    /**
     * TLS MAC. Note that AEAD ciphers do not have separate MACs.
     */
    mac?: string;
    /**
     * Page certificate.
     */
    certificate: string[];
    /**
     * Certificate subject name.
     */
    subjectName: string;
    /**
     * Name of the issuing CA.
     */
    issuer: string;
    /**
     * Certificate valid from date.
     */
    validFrom: Network.TimeSinceEpoch;
    /**
     * Certificate valid to (expiration) date
     */
    validTo: Network.TimeSinceEpoch;
    /**
     * The highest priority network error code, if the certificate has an error.
     */
    certificateNetworkError?: string;
    /**
     * True if the certificate uses a weak signature aglorithm.
     */
    certificateHasWeakSignature: boolean;
    /**
     * True if the certificate has a SHA1 signature in the chain.
     */
    certificateHasSha1Signature: boolean;
    /**
     * True if modern SSL
     */
    modernSSL: boolean;
    /**
     * True if the connection is using an obsolete SSL protocol.
     */
    obsoleteSslProtocol: boolean;
    /**
     * True if the connection is using an obsolete SSL key exchange.
     */
    obsoleteSslKeyExchange: boolean;
    /**
     * True if the connection is using an obsolete SSL cipher.
     */
    obsoleteSslCipher: boolean;
    /**
     * True if the connection is using an obsolete SSL signature.
     */
    obsoleteSslSignature: boolean;
  }

  export const enum SafetyTipStatus {
    BadReputation = 'badReputation',
    Lookalike = 'lookalike',
  }

  export interface SafetyTipInfo {
    /**
     * Describes whether the page triggers any safety tips or reputation warnings. Default is unknown.
     */
    safetyTipStatus: SafetyTipStatus;
    /**
     * The URL the safety tip suggested ("Did you mean?"). Only filled in for lookalike matches.
     */
    safeUrl?: string;
  }

  /**
   * Security state information about the page.
   */
  export interface VisibleSecurityState {
    /**
     * The security level of the page.
     */
    securityState: SecurityState;
    /**
     * Security state details about the page certificate.
     */
    certificateSecurityState?: CertificateSecurityState;
    /**
     * The type of Safety Tip triggered on the page. Note that this field will be set even if the Safety Tip UI was not actually shown.
     */
    safetyTipInfo?: SafetyTipInfo;
    /**
     * Array of security state issues ids.
     */
    securityStateIssueIds: string[];
  }

  /**
   * An explanation of an factor contributing to the security state.
   */
  export interface SecurityStateExplanation {
    /**
     * Security state representing the severity of the factor being explained.
     */
    securityState: SecurityState;
    /**
     * Title describing the type of factor.
     */
    title: string;
    /**
     * Short phrase describing the type of factor.
     */
    summary: string;
    /**
     * Full text explanation of the factor.
     */
    description: string;
    /**
     * The type of mixed content described by the explanation.
     */
    mixedContentType: MixedContentType;
    /**
     * Page certificate.
     */
    certificate: string[];
    /**
     * Recommendations to fix any issues.
     */
    recommendations?: string[];
  }

  /**
   * Information about insecure content on the page.
   */
  export interface InsecureContentStatus {
    /**
     * Always false.
     */
    ranMixedContent: boolean;
    /**
     * Always false.
     */
    displayedMixedContent: boolean;
    /**
     * Always false.
     */
    containedMixedForm: boolean;
    /**
     * Always false.
     */
    ranContentWithCertErrors: boolean;
    /**
     * Always false.
     */
    displayedContentWithCertErrors: boolean;
    /**
     * Always set to unknown.
     */
    ranInsecureContentStyle: SecurityState;
    /**
     * Always set to unknown.
     */
    displayedInsecureContentStyle: SecurityState;
  }

  /**
   * The action to take when a certificate error occurs. continue will continue processing the
   * request and cancel will cancel the request.
   */
  export const enum CertificateErrorAction {
    Continue = 'continue',
    Cancel = 'cancel',
  }

  export interface SetIgnoreCertificateErrorsRequest {
    /**
     * If true, all certificate errors will be ignored.
     */
    ignore: boolean;
  }

  export interface HandleCertificateErrorRequest {
    /**
     * The ID of the event.
     */
    eventId: integer;
    /**
     * The action to take on the certificate error.
     */
    action: CertificateErrorAction;
  }

  export interface SetOverrideCertificateErrorsRequest {
    /**
     * If true, certificate errors will be overridden.
     */
    override: boolean;
  }

  /**
   * There is a certificate error. If overriding certificate errors is enabled, then it should be
   * handled with the `handleCertificateError` command. Note: this event does not fire if the
   * certificate error has been allowed internally. Only one client per target should override
   * certificate errors at the same time.
   */
  export interface CertificateErrorEvent {
    /**
     * The ID of the event.
     */
    eventId: integer;
    /**
     * The type of the error.
     */
    errorType: string;
    /**
     * The url that was requested.
     */
    requestURL: string;
  }

  /**
   * The security state of the page changed.
   */
  export interface VisibleSecurityStateChangedEvent {
    /**
     * Security state information about the page.
     */
    visibleSecurityState: VisibleSecurityState;
  }

  /**
   * The security state of the page changed. No longer being sent.
   */
  export interface SecurityStateChangedEvent {
    /**
     * Security state.
     */
    securityState: SecurityState;
    /**
     * True if the page was loaded over cryptographic transport such as HTTPS.
     */
    schemeIsCryptographic: boolean;
    /**
     * Previously a list of explanations for the security state. Now always
     * empty.
     */
    explanations: SecurityStateExplanation[];
    /**
     * Information about insecure content on the page.
     */
    insecureContentStatus: InsecureContentStatus;
    /**
     * Overrides user-visible description of the state. Always omitted.
     */
    summary?: string;
  }
}

export namespace ServiceWorker {

  export type RegistrationID = OpaqueIdentifier<string, 'Protocol.ServiceWorker.RegistrationID'>;

  /**
   * ServiceWorker registration.
   */
  export interface ServiceWorkerRegistration {
    registrationId: RegistrationID;
    scopeURL: string;
    isDeleted: boolean;
  }

  export const enum ServiceWorkerVersionRunningStatus {
    Stopped = 'stopped',
    Starting = 'starting',
    Running = 'running',
    Stopping = 'stopping',
  }

  export const enum ServiceWorkerVersionStatus {
    New = 'new',
    Installing = 'installing',
    Installed = 'installed',
    Activating = 'activating',
    Activated = 'activated',
    Redundant = 'redundant',
  }

  /**
   * ServiceWorker version.
   */
  export interface ServiceWorkerVersion {
    versionId: string;
    registrationId: RegistrationID;
    scriptURL: string;
    runningStatus: ServiceWorkerVersionRunningStatus;
    status: ServiceWorkerVersionStatus;
    /**
     * The Last-Modified header value of the main script.
     */
    scriptLastModified?: number;
    /**
     * The time at which the response headers of the main script were received from the server.
     * For cached script it is the last time the cache entry was validated.
     */
    scriptResponseTime?: number;
    controlledClients?: Target.TargetID[];
    targetId?: Target.TargetID;
  }

  /**
   * ServiceWorker error message.
   */
  export interface ServiceWorkerErrorMessage {
    errorMessage: string;
    registrationId: RegistrationID;
    versionId: string;
    sourceURL: string;
    lineNumber: integer;
    columnNumber: integer;
  }

  export interface DeliverPushMessageRequest {
    origin: string;
    registrationId: RegistrationID;
    data: string;
  }

  export interface DispatchSyncEventRequest {
    origin: string;
    registrationId: RegistrationID;
    tag: string;
    lastChance: boolean;
  }

  export interface DispatchPeriodicSyncEventRequest {
    origin: string;
    registrationId: RegistrationID;
    tag: string;
  }

  export interface InspectWorkerRequest {
    versionId: string;
  }

  export interface SetForceUpdateOnPageLoadRequest {
    forceUpdateOnPageLoad: boolean;
  }

  export interface SkipWaitingRequest {
    scopeURL: string;
  }

  export interface StartWorkerRequest {
    scopeURL: string;
  }

  export interface StopWorkerRequest {
    versionId: string;
  }

  export interface UnregisterRequest {
    scopeURL: string;
  }

  export interface UpdateRegistrationRequest {
    scopeURL: string;
  }

  export interface WorkerErrorReportedEvent {
    errorMessage: ServiceWorkerErrorMessage;
  }

  export interface WorkerRegistrationUpdatedEvent {
    registrations: ServiceWorkerRegistration[];
  }

  export interface WorkerVersionUpdatedEvent {
    versions: ServiceWorkerVersion[];
  }
}

export namespace Storage {

  export type SerializedStorageKey = string;

  /**
   * Enum of possible storage types.
   */
  export const enum StorageType {
    Appcache = 'appcache',
    Cookies = 'cookies',
    File_systems = 'file_systems',
    Indexeddb = 'indexeddb',
    Local_storage = 'local_storage',
    Shader_cache = 'shader_cache',
    Websql = 'websql',
    Service_workers = 'service_workers',
    Cache_storage = 'cache_storage',
    Interest_groups = 'interest_groups',
    All = 'all',
    Other = 'other',
  }

  /**
   * Usage for a storage type.
   */
  export interface UsageForType {
    /**
     * Name of storage type.
     */
    storageType: StorageType;
    /**
     * Storage usage (bytes).
     */
    usage: number;
  }

  /**
   * Pair of issuer origin and number of available (signed, but not used) Trust
   * Tokens from that issuer.
   */
  export interface TrustTokens {
    issuerOrigin: string;
    count: number;
  }

  /**
   * Enum of interest group access types.
   */
  export const enum InterestGroupAccessType {
    Join = 'join',
    Leave = 'leave',
    Update = 'update',
    Bid = 'bid',
    Win = 'win',
  }

  /**
   * Ad advertising element inside an interest group.
   */
  export interface InterestGroupAd {
    renderUrl: string;
    metadata?: string;
  }

  /**
   * The full details of an interest group.
   */
  export interface InterestGroupDetails {
    ownerOrigin: string;
    name: string;
    expirationTime: Network.TimeSinceEpoch;
    joiningOrigin: string;
    biddingUrl?: string;
    biddingWasmHelperUrl?: string;
    updateUrl?: string;
    trustedBiddingSignalsUrl?: string;
    trustedBiddingSignalsKeys: string[];
    userBiddingSignals?: string;
    ads: InterestGroupAd[];
    adComponents: InterestGroupAd[];
  }

  export interface GetStorageKeyForFrameRequest {
    frameId: Page.FrameId;
  }

  export interface GetStorageKeyForFrameResponse extends ProtocolResponseWithError {
    storageKey: SerializedStorageKey;
  }

  export interface ClearDataForOriginRequest {
    /**
     * Security origin.
     */
    origin: string;
    /**
     * Comma separated list of StorageType to clear.
     */
    storageTypes: string;
  }

  export interface ClearDataForStorageKeyRequest {
    /**
     * Storage key.
     */
    storageKey: string;
    /**
     * Comma separated list of StorageType to clear.
     */
    storageTypes: string;
  }

  export interface GetCookiesRequest {
    /**
     * Browser context to use when called on the browser endpoint.
     */
    browserContextId?: Browser.BrowserContextID;
  }

  export interface GetCookiesResponse extends ProtocolResponseWithError {
    /**
     * Array of cookie objects.
     */
    cookies: Network.Cookie[];
  }

  export interface SetCookiesRequest {
    /**
     * Cookies to be set.
     */
    cookies: Network.CookieParam[];
    /**
     * Browser context to use when called on the browser endpoint.
     */
    browserContextId?: Browser.BrowserContextID;
  }

  export interface ClearCookiesRequest {
    /**
     * Browser context to use when called on the browser endpoint.
     */
    browserContextId?: Browser.BrowserContextID;
  }

  export interface GetUsageAndQuotaRequest {
    /**
     * Security origin.
     */
    origin: string;
  }

  export interface GetUsageAndQuotaResponse extends ProtocolResponseWithError {
    /**
     * Storage usage (bytes).
     */
    usage: number;
    /**
     * Storage quota (bytes).
     */
    quota: number;
    /**
     * Whether or not the origin has an active storage quota override
     */
    overrideActive: boolean;
    /**
     * Storage usage per type (bytes).
     */
    usageBreakdown: UsageForType[];
  }

  export interface OverrideQuotaForOriginRequest {
    /**
     * Security origin.
     */
    origin: string;
    /**
     * The quota size (in bytes) to override the original quota with.
     * If this is called multiple times, the overridden quota will be equal to
     * the quotaSize provided in the final call. If this is called without
     * specifying a quotaSize, the quota will be reset to the default value for
     * the specified origin. If this is called multiple times with different
     * origins, the override will be maintained for each origin until it is
     * disabled (called without a quotaSize).
     */
    quotaSize?: number;
  }

  export interface TrackCacheStorageForOriginRequest {
    /**
     * Security origin.
     */
    origin: string;
  }

  export interface TrackIndexedDBForOriginRequest {
    /**
     * Security origin.
     */
    origin: string;
  }

  export interface TrackIndexedDBForStorageKeyRequest {
    /**
     * Storage key.
     */
    storageKey: string;
  }

  export interface UntrackCacheStorageForOriginRequest {
    /**
     * Security origin.
     */
    origin: string;
  }

  export interface UntrackIndexedDBForOriginRequest {
    /**
     * Security origin.
     */
    origin: string;
  }

  export interface UntrackIndexedDBForStorageKeyRequest {
    /**
     * Storage key.
     */
    storageKey: string;
  }

  export interface GetTrustTokensResponse extends ProtocolResponseWithError {
    tokens: TrustTokens[];
  }

  export interface ClearTrustTokensRequest {
    issuerOrigin: string;
  }

  export interface ClearTrustTokensResponse extends ProtocolResponseWithError {
    /**
     * True if any tokens were deleted, false otherwise.
     */
    didDeleteTokens: boolean;
  }

  export interface GetInterestGroupDetailsRequest {
    ownerOrigin: string;
    name: string;
  }

  export interface GetInterestGroupDetailsResponse extends ProtocolResponseWithError {
    details: InterestGroupDetails;
  }

  export interface SetInterestGroupTrackingRequest {
    enable: boolean;
  }

  /**
   * A cache's contents have been modified.
   */
  export interface CacheStorageContentUpdatedEvent {
    /**
     * Origin to update.
     */
    origin: string;
    /**
     * Name of cache in origin.
     */
    cacheName: string;
  }

  /**
   * A cache has been added/deleted.
   */
  export interface CacheStorageListUpdatedEvent {
    /**
     * Origin to update.
     */
    origin: string;
  }

  /**
   * The origin's IndexedDB object store has been modified.
   */
  export interface IndexedDBContentUpdatedEvent {
    /**
     * Origin to update.
     */
    origin: string;
    /**
     * Storage key to update.
     */
    storageKey: string;
    /**
     * Database to update.
     */
    databaseName: string;
    /**
     * ObjectStore to update.
     */
    objectStoreName: string;
  }

  /**
   * The origin's IndexedDB database list has been modified.
   */
  export interface IndexedDBListUpdatedEvent {
    /**
     * Origin to update.
     */
    origin: string;
    /**
     * Storage key to update.
     */
    storageKey: string;
  }

  /**
   * One of the interest groups was accessed by the associated page.
   */
  export interface InterestGroupAccessedEvent {
    accessTime: Network.TimeSinceEpoch;
    type: InterestGroupAccessType;
    ownerOrigin: string;
    name: string;
  }
}

/**
 * The SystemInfo domain defines methods and events for querying low-level system information.
 */
export namespace SystemInfo {

  /**
   * Describes a single graphics processor (GPU).
   */
  export interface GPUDevice {
    /**
     * PCI ID of the GPU vendor, if available; 0 otherwise.
     */
    vendorId: number;
    /**
     * PCI ID of the GPU device, if available; 0 otherwise.
     */
    deviceId: number;
    /**
     * Sub sys ID of the GPU, only available on Windows.
     */
    subSysId?: number;
    /**
     * Revision of the GPU, only available on Windows.
     */
    revision?: number;
    /**
     * String description of the GPU vendor, if the PCI ID is not available.
     */
    vendorString: string;
    /**
     * String description of the GPU device, if the PCI ID is not available.
     */
    deviceString: string;
    /**
     * String description of the GPU driver vendor.
     */
    driverVendor: string;
    /**
     * String description of the GPU driver version.
     */
    driverVersion: string;
  }

  /**
   * Describes the width and height dimensions of an entity.
   */
  export interface Size {
    /**
     * Width in pixels.
     */
    width: integer;
    /**
     * Height in pixels.
     */
    height: integer;
  }

  /**
   * Describes a supported video decoding profile with its associated minimum and
   * maximum resolutions.
   */
  export interface VideoDecodeAcceleratorCapability {
    /**
     * Video codec profile that is supported, e.g. VP9 Profile 2.
     */
    profile: string;
    /**
     * Maximum video dimensions in pixels supported for this |profile|.
     */
    maxResolution: Size;
    /**
     * Minimum video dimensions in pixels supported for this |profile|.
     */
    minResolution: Size;
  }

  /**
   * Describes a supported video encoding profile with its associated maximum
   * resolution and maximum framerate.
   */
  export interface VideoEncodeAcceleratorCapability {
    /**
     * Video codec profile that is supported, e.g H264 Main.
     */
    profile: string;
    /**
     * Maximum video dimensions in pixels supported for this |profile|.
     */
    maxResolution: Size;
    /**
     * Maximum encoding framerate in frames per second supported for this
     * |profile|, as fraction's numerator and denominator, e.g. 24/1 fps,
     * 24000/1001 fps, etc.
     */
    maxFramerateNumerator: integer;
    maxFramerateDenominator: integer;
  }

  /**
   * YUV subsampling type of the pixels of a given image.
   */
  export const enum SubsamplingFormat {
    Yuv420 = 'yuv420',
    Yuv422 = 'yuv422',
    Yuv444 = 'yuv444',
  }

  /**
   * Image format of a given image.
   */
  export const enum ImageType {
    Jpeg = 'jpeg',
    Webp = 'webp',
    Unknown = 'unknown',
  }

  /**
   * Describes a supported image decoding profile with its associated minimum and
   * maximum resolutions and subsampling.
   */
  export interface ImageDecodeAcceleratorCapability {
    /**
     * Image coded, e.g. Jpeg.
     */
    imageType: ImageType;
    /**
     * Maximum supported dimensions of the image in pixels.
     */
    maxDimensions: Size;
    /**
     * Minimum supported dimensions of the image in pixels.
     */
    minDimensions: Size;
    /**
     * Optional array of supported subsampling formats, e.g. 4:2:0, if known.
     */
    subsamplings: SubsamplingFormat[];
  }

  /**
   * Provides information about the GPU(s) on the system.
   */
  export interface GPUInfo {
    /**
     * The graphics devices on the system. Element 0 is the primary GPU.
     */
    devices: GPUDevice[];
    /**
     * An optional dictionary of additional GPU related attributes.
     */
    auxAttributes?: any;
    /**
     * An optional dictionary of graphics features and their status.
     */
    featureStatus?: any;
    /**
     * An optional array of GPU driver bug workarounds.
     */
    driverBugWorkarounds: string[];
    /**
     * Supported accelerated video decoding capabilities.
     */
    videoDecoding: VideoDecodeAcceleratorCapability[];
    /**
     * Supported accelerated video encoding capabilities.
     */
    videoEncoding: VideoEncodeAcceleratorCapability[];
    /**
     * Supported accelerated image decoding capabilities.
     */
    imageDecoding: ImageDecodeAcceleratorCapability[];
  }

  /**
   * Represents process info.
   */
  export interface ProcessInfo {
    /**
     * Specifies process type.
     */
    type: string;
    /**
     * Specifies process id.
     */
    id: integer;
    /**
     * Specifies cumulative CPU usage in seconds across all threads of the
     * process since the process start.
     */
    cpuTime: number;
  }

  export interface GetInfoResponse extends ProtocolResponseWithError {
    /**
     * Information about the GPUs on the system.
     */
    gpu: GPUInfo;
    /**
     * A platform-dependent description of the model of the machine. On Mac OS, this is, for
     * example, 'MacBookPro'. Will be the empty string if not supported.
     */
    modelName: string;
    /**
     * A platform-dependent description of the version of the machine. On Mac OS, this is, for
     * example, '10.1'. Will be the empty string if not supported.
     */
    modelVersion: string;
    /**
     * The command line string used to launch the browser. Will be the empty string if not
     * supported.
     */
    commandLine: string;
  }

  export interface GetProcessInfoResponse extends ProtocolResponseWithError {
    /**
     * An array of process info blocks.
     */
    processInfo: ProcessInfo[];
  }
}

/**
 * Supports additional targets discovery and allows to attach to them.
 */
export namespace Target {

  export type TargetID = OpaqueIdentifier<string, 'Protocol.Target.TargetID'>;

  /**
   * Unique identifier of attached debugging session.
   */
  export type SessionID = OpaqueIdentifier<string, 'Protocol.Target.SessionID'>;

  export interface TargetInfo {
    targetId: TargetID;
    type: string;
    title: string;
    url: string;
    /**
     * Whether the target has an attached client.
     */
    attached: boolean;
    /**
     * Opener target Id
     */
    openerId?: TargetID;
    /**
     * Whether the target has access to the originating window.
     */
    canAccessOpener: boolean;
    /**
     * Frame id of originating window (is only set if target has an opener).
     */
    openerFrameId?: Page.FrameId;
    browserContextId?: Browser.BrowserContextID;
  }

  /**
   * A filter used by target query/discovery/auto-attach operations.
   */
  export interface FilterEntry {
    /**
     * If set, causes exclusion of mathcing targets from the list.
     */
    exclude?: boolean;
    /**
     * If not present, matches any type.
     */
    type?: string;
  }

  /**
   * The entries in TargetFilter are matched sequentially against targets and
   * the first entry that matches determines if the target is included or not,
   * depending on the value of `exclude` field in the entry.
   * If filter is not specified, the one assumed is
   * [{type: "browser", exclude: true}, {type: "tab", exclude: true}, {}]
   * (i.e. include everything but `browser` and `tab`).
   */
  export type TargetFilter = FilterEntry[];

  export interface RemoteLocation {
    host: string;
    port: integer;
  }

  export interface ActivateTargetRequest {
    targetId: TargetID;
  }

  export interface AttachToTargetRequest {
    targetId: TargetID;
    /**
     * Enables "flat" access to the session via specifying sessionId attribute in the commands.
     * We plan to make this the default, deprecate non-flattened mode,
     * and eventually retire it. See crbug.com/991325.
     */
    flatten?: boolean;
  }

  export interface AttachToTargetResponse extends ProtocolResponseWithError {
    /**
     * Id assigned to the session.
     */
    sessionId: SessionID;
  }

  export interface AttachToBrowserTargetResponse extends ProtocolResponseWithError {
    /**
     * Id assigned to the session.
     */
    sessionId: SessionID;
  }

  export interface CloseTargetRequest {
    targetId: TargetID;
  }

  export interface CloseTargetResponse extends ProtocolResponseWithError {
    /**
     * Always set to true. If an error occurs, the response indicates protocol error.
     */
    success: boolean;
  }

  export interface ExposeDevToolsProtocolRequest {
    targetId: TargetID;
    /**
     * Binding name, 'cdp' if not specified.
     */
    bindingName?: string;
  }

  export interface CreateBrowserContextRequest {
    /**
     * If specified, disposes this context when debugging session disconnects.
     */
    disposeOnDetach?: boolean;
    /**
     * Proxy server, similar to the one passed to --proxy-server
     */
    proxyServer?: string;
    /**
     * Proxy bypass list, similar to the one passed to --proxy-bypass-list
     */
    proxyBypassList?: string;
    /**
     * An optional list of origins to grant unlimited cross-origin access to.
     * Parts of the URL other than those constituting origin are ignored.
     */
    originsWithUniversalNetworkAccess?: string[];
  }

  export interface CreateBrowserContextResponse extends ProtocolResponseWithError {
    /**
     * The id of the context created.
     */
    browserContextId: Browser.BrowserContextID;
  }

  export interface GetBrowserContextsResponse extends ProtocolResponseWithError {
    /**
     * An array of browser context ids.
     */
    browserContextIds: Browser.BrowserContextID[];
  }

  export interface CreateTargetRequest {
    /**
     * The initial URL the page will be navigated to. An empty string indicates about:blank.
     */
    url: string;
    /**
     * Frame width in DIP (headless chrome only).
     */
    width?: integer;
    /**
     * Frame height in DIP (headless chrome only).
     */
    height?: integer;
    /**
     * The browser context to create the page in.
     */
    browserContextId?: Browser.BrowserContextID;
    /**
     * Whether BeginFrames for this target will be controlled via DevTools (headless chrome only,
     * not supported on MacOS yet, false by default).
     */
    enableBeginFrameControl?: boolean;
    /**
     * Whether to create a new Window or Tab (chrome-only, false by default).
     */
    newWindow?: boolean;
    /**
     * Whether to create the target in background or foreground (chrome-only,
     * false by default).
     */
    background?: boolean;
  }

  export interface CreateTargetResponse extends ProtocolResponseWithError {
    /**
     * The id of the page opened.
     */
    targetId: TargetID;
  }

  export interface DetachFromTargetRequest {
    /**
     * Session to detach.
     */
    sessionId?: SessionID;
    /**
     * Deprecated.
     */
    targetId?: TargetID;
  }

  export interface DisposeBrowserContextRequest {
    browserContextId: Browser.BrowserContextID;
  }

  export interface GetTargetInfoRequest {
    targetId?: TargetID;
  }

  export interface GetTargetInfoResponse extends ProtocolResponseWithError {
    targetInfo: TargetInfo;
  }

  export interface GetTargetsRequest {
    /**
     * Only targets matching filter will be reported. If filter is not specified
     * and target discovery is currently enabled, a filter used for target discovery
     * is used for consistency.
     */
    filter?: TargetFilter;
  }

  export interface GetTargetsResponse extends ProtocolResponseWithError {
    /**
     * The list of targets.
     */
    targetInfos: TargetInfo[];
  }

  export interface SendMessageToTargetRequest {
    message: string;
    /**
     * Identifier of the session.
     */
    sessionId?: SessionID;
    /**
     * Deprecated.
     */
    targetId?: TargetID;
  }

  export interface SetAutoAttachRequest {
    /**
     * Whether to auto-attach to related targets.
     */
    autoAttach: boolean;
    /**
     * Whether to pause new targets when attaching to them. Use `Runtime.runIfWaitingForDebugger`
     * to run paused targets.
     */
    waitForDebuggerOnStart: boolean;
    /**
     * Enables "flat" access to the session via specifying sessionId attribute in the commands.
     * We plan to make this the default, deprecate non-flattened mode,
     * and eventually retire it. See crbug.com/991325.
     */
    flatten?: boolean;
    /**
     * Only targets matching filter will be attached.
     */
    filter?: TargetFilter;
  }

  export interface AutoAttachRelatedRequest {
    targetId: TargetID;
    /**
     * Whether to pause new targets when attaching to them. Use `Runtime.runIfWaitingForDebugger`
     * to run paused targets.
     */
    waitForDebuggerOnStart: boolean;
    /**
     * Only targets matching filter will be attached.
     */
    filter?: TargetFilter;
  }

  export interface SetDiscoverTargetsRequest {
    /**
     * Whether to discover available targets.
     */
    discover: boolean;
    /**
     * Only targets matching filter will be attached. If `discover` is false,
     * `filter` must be omitted or empty.
     */
    filter?: TargetFilter;
  }

  export interface SetRemoteLocationsRequest {
    /**
     * List of remote locations.
     */
    locations: RemoteLocation[];
  }

  /**
   * Issued when attached to target because of auto-attach or `attachToTarget` command.
   */
  export interface AttachedToTargetEvent {
    /**
     * Identifier assigned to the session used to send/receive messages.
     */
    sessionId: SessionID;
    targetInfo: TargetInfo;
    waitingForDebugger: boolean;
  }

  /**
   * Issued when detached from target for any reason (including `detachFromTarget` command). Can be
   * issued multiple times per target if multiple sessions have been attached to it.
   */
  export interface DetachedFromTargetEvent {
    /**
     * Detached session identifier.
     */
    sessionId: SessionID;
    /**
     * Deprecated.
     */
    targetId?: TargetID;
  }

  /**
   * Notifies about a new protocol message received from the session (as reported in
   * `attachedToTarget` event).
   */
  export interface ReceivedMessageFromTargetEvent {
    /**
     * Identifier of a session which sends a message.
     */
    sessionId: SessionID;
    message: string;
    /**
     * Deprecated.
     */
    targetId?: TargetID;
  }

  /**
   * Issued when a possible inspection target is created.
   */
  export interface TargetCreatedEvent {
    targetInfo: TargetInfo;
  }

  /**
   * Issued when a target is destroyed.
   */
  export interface TargetDestroyedEvent {
    targetId: TargetID;
  }

  /**
   * Issued when a target has crashed.
   */
  export interface TargetCrashedEvent {
    targetId: TargetID;
    /**
     * Termination status type.
     */
    status: string;
    /**
     * Termination error code.
     */
    errorCode: integer;
  }

  /**
   * Issued when some information about a target has changed. This only happens between
   * `targetCreated` and `targetDestroyed`.
   */
  export interface TargetInfoChangedEvent {
    targetInfo: TargetInfo;
  }
}

/**
 * The Tethering domain defines methods and events for browser port binding.
 */
export namespace Tethering {

  export interface BindRequest {
    /**
     * Port number to bind.
     */
    port: integer;
  }

  export interface UnbindRequest {
    /**
     * Port number to unbind.
     */
    port: integer;
  }

  /**
   * Informs that port was successfully bound and got a specified connection id.
   */
  export interface AcceptedEvent {
    /**
     * Port number that was successfully bound.
     */
    port: integer;
    /**
     * Connection id to be used.
     */
    connectionId: string;
  }
}

export namespace Tracing {

  /**
   * Configuration for memory dump. Used only when "memory-infra" category is enabled.
   */
  export interface MemoryDumpConfig {
    [key: string]: string;
  }

  export const enum TraceConfigRecordMode {
    RecordUntilFull = 'recordUntilFull',
    RecordContinuously = 'recordContinuously',
    RecordAsMuchAsPossible = 'recordAsMuchAsPossible',
    EchoToConsole = 'echoToConsole',
  }

  export interface TraceConfig {
    /**
     * Controls how the trace buffer stores data.
     */
    recordMode?: TraceConfigRecordMode;
    /**
     * Size of the trace buffer in kilobytes. If not specified or zero is passed, a default value
     * of 200 MB would be used.
     */
    traceBufferSizeInKb?: number;
    /**
     * Turns on JavaScript stack sampling.
     */
    enableSampling?: boolean;
    /**
     * Turns on system tracing.
     */
    enableSystrace?: boolean;
    /**
     * Turns on argument filter.
     */
    enableArgumentFilter?: boolean;
    /**
     * Included category filters.
     */
    includedCategories?: string[];
    /**
     * Excluded category filters.
     */
    excludedCategories?: string[];
    /**
     * Configuration to synthesize the delays in tracing.
     */
    syntheticDelays?: string[];
    /**
     * Configuration for memory dump triggers. Used only when "memory-infra" category is enabled.
     */
    memoryDumpConfig?: MemoryDumpConfig;
  }

  /**
   * Data format of a trace. Can be either the legacy JSON format or the
   * protocol buffer format. Note that the JSON format will be deprecated soon.
   */
  export const enum StreamFormat {
    Json = 'json',
    Proto = 'proto',
  }

  /**
   * Compression type to use for traces returned via streams.
   */
  export const enum StreamCompression {
    None = 'none',
    Gzip = 'gzip',
  }

  /**
   * Details exposed when memory request explicitly declared.
   * Keep consistent with memory_dump_request_args.h and
   * memory_instrumentation.mojom
   */
  export const enum MemoryDumpLevelOfDetail {
    Background = 'background',
    Light = 'light',
    Detailed = 'detailed',
  }

  /**
   * Backend type to use for tracing. `chrome` uses the Chrome-integrated
   * tracing service and is supported on all platforms. `system` is only
   * supported on Chrome OS and uses the Perfetto system tracing service.
   * `auto` chooses `system` when the perfettoConfig provided to Tracing.start
   * specifies at least one non-Chrome data source; otherwise uses `chrome`.
   */
  export const enum TracingBackend {
    Auto = 'auto',
    Chrome = 'chrome',
    System = 'system',
  }

  export interface GetCategoriesResponse extends ProtocolResponseWithError {
    /**
     * A list of supported tracing categories.
     */
    categories: string[];
  }

  export interface RecordClockSyncMarkerRequest {
    /**
     * The ID of this clock sync marker
     */
    syncId: string;
  }

  export interface RequestMemoryDumpRequest {
    /**
     * Enables more deterministic results by forcing garbage collection
     */
    deterministic?: boolean;
    /**
     * Specifies level of details in memory dump. Defaults to "detailed".
     */
    levelOfDetail?: MemoryDumpLevelOfDetail;
  }

  export interface RequestMemoryDumpResponse extends ProtocolResponseWithError {
    /**
     * GUID of the resulting global memory dump.
     */
    dumpGuid: string;
    /**
     * True iff the global memory dump succeeded.
     */
    success: boolean;
  }

  export const enum StartRequestTransferMode {
    ReportEvents = 'ReportEvents',
    ReturnAsStream = 'ReturnAsStream',
  }

  export interface StartRequest {
    /**
     * Category/tag filter
     */
    categories?: string;
    /**
     * Tracing options
     */
    options?: string;
    /**
     * If set, the agent will issue bufferUsage events at this interval, specified in milliseconds
     */
    bufferUsageReportingInterval?: number;
    /**
     * Whether to report trace events as series of dataCollected events or to save trace to a
     * stream (defaults to `ReportEvents`).
     */
    transferMode?: StartRequestTransferMode;
    /**
     * Trace data format to use. This only applies when using `ReturnAsStream`
     * transfer mode (defaults to `json`).
     */
    streamFormat?: StreamFormat;
    /**
     * Compression format to use. This only applies when using `ReturnAsStream`
     * transfer mode (defaults to `none`)
     */
    streamCompression?: StreamCompression;
    traceConfig?: TraceConfig;
    /**
     * Base64-encoded serialized perfetto.protos.TraceConfig protobuf message
     * When specified, the parameters `categories`, `options`, `traceConfig`
     * are ignored.
     */
    perfettoConfig?: binary;
    /**
     * Backend type (defaults to `auto`)
     */
    tracingBackend?: TracingBackend;
  }

  export interface BufferUsageEvent {
    /**
     * A number in range [0..1] that indicates the used size of event buffer as a fraction of its
     * total size.
     */
    percentFull?: number;
    /**
     * An approximate number of events in the trace log.
     */
    eventCount?: number;
    /**
     * A number in range [0..1] that indicates the used size of event buffer as a fraction of its
     * total size.
     */
    value?: number;
  }

  /**
   * Contains an bucket of collected trace events. When tracing is stopped collected events will be
   * send as a sequence of dataCollected events followed by tracingComplete event.
   */
  export interface DataCollectedEvent {
    value: any[];
  }

  /**
   * Signals that tracing is stopped and there is no trace buffers pending flush, all data were
   * delivered via dataCollected events.
   */
  export interface TracingCompleteEvent {
    /**
     * Indicates whether some trace data is known to have been lost, e.g. because the trace ring
     * buffer wrapped around.
     */
    dataLossOccurred: boolean;
    /**
     * A handle of the stream that holds resulting trace data.
     */
    stream?: IO.StreamHandle;
    /**
     * Trace data format of returned stream.
     */
    traceFormat?: StreamFormat;
    /**
     * Compression format of returned stream.
     */
    streamCompression?: StreamCompression;
  }
}

/**
 * A domain for letting clients substitute browser's network layer with client code.
 */
export namespace Fetch {

  /**
   * Unique request identifier.
   */
  export type RequestId = OpaqueIdentifier<string, 'Protocol.Fetch.RequestId'>;

  /**
   * Stages of the request to handle. Request will intercept before the request is
   * sent. Response will intercept after the response is received (but before response
   * body is received).
   */
  export const enum RequestStage {
    Request = 'Request',
    Response = 'Response',
  }

  export interface RequestPattern {
    /**
     * Wildcards (`'*'` -> zero or more, `'?'` -> exactly one) are allowed. Escape character is
     * backslash. Omitting is equivalent to `"*"`.
     */
    urlPattern?: string;
    /**
     * If set, only requests for matching resource types will be intercepted.
     */
    resourceType?: Network.ResourceType;
    /**
     * Stage at which to begin intercepting requests. Default is Request.
     */
    requestStage?: RequestStage;
  }

  /**
   * Response HTTP header entry
   */
  export interface HeaderEntry {
    name: string;
    value: string;
  }

  export const enum AuthChallengeSource {
    Server = 'Server',
    Proxy = 'Proxy',
  }

  /**
   * Authorization challenge for HTTP status code 401 or 407.
   */
  export interface AuthChallenge {
    /**
     * Source of the authentication challenge.
     */
    source?: AuthChallengeSource;
    /**
     * Origin of the challenger.
     */
    origin: string;
    /**
     * The authentication scheme used, such as basic or digest
     */
    scheme: string;
    /**
     * The realm of the challenge. May be empty.
     */
    realm: string;
  }

  export const enum AuthChallengeResponseResponse {
    Default = 'Default',
    CancelAuth = 'CancelAuth',
    ProvideCredentials = 'ProvideCredentials',
  }

  /**
   * Response to an AuthChallenge.
   */
  export interface AuthChallengeResponse {
    /**
     * The decision on what to do in response to the authorization challenge.  Default means
     * deferring to the default behavior of the net stack, which will likely either the Cancel
     * authentication or display a popup dialog box.
     */
    response: AuthChallengeResponseResponse;
    /**
     * The username to provide, possibly empty. Should only be set if response is
     * ProvideCredentials.
     */
    username?: string;
    /**
     * The password to provide, possibly empty. Should only be set if response is
     * ProvideCredentials.
     */
    password?: string;
  }

  export interface EnableRequest {
    /**
     * If specified, only requests matching any of these patterns will produce
     * fetchRequested event and will be paused until clients response. If not set,
     * all requests will be affected.
     */
    patterns?: RequestPattern[];
    /**
     * If true, authRequired events will be issued and requests will be paused
     * expecting a call to continueWithAuth.
     */
    handleAuthRequests?: boolean;
  }

  export interface FailRequestRequest {
    /**
     * An id the client received in requestPaused event.
     */
    requestId: RequestId;
    /**
     * Causes the request to fail with the given reason.
     */
    errorReason: Network.ErrorReason;
  }

  export interface FulfillRequestRequest {
    /**
     * An id the client received in requestPaused event.
     */
    requestId: RequestId;
    /**
     * An HTTP response code.
     */
    responseCode: integer;
    /**
     * Response headers.
     */
    responseHeaders?: HeaderEntry[];
    /**
     * Alternative way of specifying response headers as a \0-separated
     * series of name: value pairs. Prefer the above method unless you
     * need to represent some non-UTF8 values that can't be transmitted
     * over the protocol as text.
     */
    binaryResponseHeaders?: binary;
    /**
     * A response body. If absent, original response body will be used if
     * the request is intercepted at the response stage and empty body
     * will be used if the request is intercepted at the request stage.
     */
    body?: binary;
    /**
     * A textual representation of responseCode.
     * If absent, a standard phrase matching responseCode is used.
     */
    responsePhrase?: string;
  }

  export interface ContinueRequestRequest {
    /**
     * An id the client received in requestPaused event.
     */
    requestId: RequestId;
    /**
     * If set, the request url will be modified in a way that's not observable by page.
     */
    url?: string;
    /**
     * If set, the request method is overridden.
     */
    method?: string;
    /**
     * If set, overrides the post data in the request.
     */
    postData?: binary;
    /**
     * If set, overrides the request headers.
     */
    headers?: HeaderEntry[];
    /**
     * If set, overrides response interception behavior for this request.
     */
    interceptResponse?: boolean;
  }

  export interface ContinueWithAuthRequest {
    /**
     * An id the client received in authRequired event.
     */
    requestId: RequestId;
    /**
     * Response to  with an authChallenge.
     */
    authChallengeResponse: AuthChallengeResponse;
  }

  export interface ContinueResponseRequest {
    /**
     * An id the client received in requestPaused event.
     */
    requestId: RequestId;
    /**
     * An HTTP response code. If absent, original response code will be used.
     */
    responseCode?: integer;
    /**
     * A textual representation of responseCode.
     * If absent, a standard phrase matching responseCode is used.
     */
    responsePhrase?: string;
    /**
     * Response headers. If absent, original response headers will be used.
     */
    responseHeaders?: HeaderEntry[];
    /**
     * Alternative way of specifying response headers as a \0-separated
     * series of name: value pairs. Prefer the above method unless you
     * need to represent some non-UTF8 values that can't be transmitted
     * over the protocol as text.
     */
    binaryResponseHeaders?: binary;
  }

  export interface GetResponseBodyRequest {
    /**
     * Identifier for the intercepted request to get body for.
     */
    requestId: RequestId;
  }

  export interface GetResponseBodyResponse extends ProtocolResponseWithError {
    /**
     * Response body.
     */
    body: string;
    /**
     * True, if content was sent as base64.
     */
    base64Encoded: boolean;
  }

  export interface TakeResponseBodyAsStreamRequest {
    requestId: RequestId;
  }

  export interface TakeResponseBodyAsStreamResponse extends ProtocolResponseWithError {
    stream: IO.StreamHandle;
  }

  /**
   * Issued when the domain is enabled and the request URL matches the
   * specified filter. The request is paused until the client responds
   * with one of continueRequest, failRequest or fulfillRequest.
   * The stage of the request can be determined by presence of responseErrorReason
   * and responseStatusCode -- the request is at the response stage if either
   * of these fields is present and in the request stage otherwise.
   */
  export interface RequestPausedEvent {
    /**
     * Each request the page makes will have a unique id.
     */
    requestId: RequestId;
    /**
     * The details of the request.
     */
    request: Network.Request;
    /**
     * The id of the frame that initiated the request.
     */
    frameId: Page.FrameId;
    /**
     * How the requested resource will be used.
     */
    resourceType: Network.ResourceType;
    /**
     * Response error if intercepted at response stage.
     */
    responseErrorReason?: Network.ErrorReason;
    /**
     * Response code if intercepted at response stage.
     */
    responseStatusCode?: integer;
    /**
     * Response status text if intercepted at response stage.
     */
    responseStatusText?: string;
    /**
     * Response headers if intercepted at the response stage.
     */
    responseHeaders?: HeaderEntry[];
    /**
     * If the intercepted request had a corresponding Network.requestWillBeSent event fired for it,
     * then this networkId will be the same as the requestId present in the requestWillBeSent event.
     */
    networkId?: RequestId;
  }

  /**
   * Issued when the domain is enabled with handleAuthRequests set to true.
   * The request is paused until client responds with continueWithAuth.
   */
  export interface AuthRequiredEvent {
    /**
     * Each request the page makes will have a unique id.
     */
    requestId: RequestId;
    /**
     * The details of the request.
     */
    request: Network.Request;
    /**
     * The id of the frame that initiated the request.
     */
    frameId: Page.FrameId;
    /**
     * How the requested resource will be used.
     */
    resourceType: Network.ResourceType;
    /**
     * Details of the Authorization Challenge encountered.
     * If this is set, client should respond with continueRequest that
     * contains AuthChallengeResponse.
     */
    authChallenge: AuthChallenge;
  }
}

/**
 * This domain allows inspection of Web Audio API.
 * https://webaudio.github.io/web-audio-api/
 */
export namespace WebAudio {

  /**
   * An unique ID for a graph object (AudioContext, AudioNode, AudioParam) in Web Audio API
   */
  export type GraphObjectId = OpaqueIdentifier<string, 'Protocol.WebAudio.GraphObjectId'>;

  /**
   * Enum of BaseAudioContext types
   */
  export const enum ContextType {
    Realtime = 'realtime',
    Offline = 'offline',
  }

  /**
   * Enum of AudioContextState from the spec
   */
  export const enum ContextState {
    Suspended = 'suspended',
    Running = 'running',
    Closed = 'closed',
  }

  /**
   * Enum of AudioNode types
   */
  export type NodeType = string;

  /**
   * Enum of AudioNode::ChannelCountMode from the spec
   */
  export const enum ChannelCountMode {
    ClampedMax = 'clamped-max',
    Explicit = 'explicit',
    Max = 'max',
  }

  /**
   * Enum of AudioNode::ChannelInterpretation from the spec
   */
  export const enum ChannelInterpretation {
    Discrete = 'discrete',
    Speakers = 'speakers',
  }

  /**
   * Enum of AudioParam types
   */
  export type ParamType = string;

  /**
   * Enum of AudioParam::AutomationRate from the spec
   */
  export const enum AutomationRate {
    ARate = 'a-rate',
    KRate = 'k-rate',
  }

  /**
   * Fields in AudioContext that change in real-time.
   */
  export interface ContextRealtimeData {
    /**
     * The current context time in second in BaseAudioContext.
     */
    currentTime: number;
    /**
     * The time spent on rendering graph divided by render quantum duration,
     * and multiplied by 100. 100 means the audio renderer reached the full
     * capacity and glitch may occur.
     */
    renderCapacity: number;
    /**
     * A running mean of callback interval.
     */
    callbackIntervalMean: number;
    /**
     * A running variance of callback interval.
     */
    callbackIntervalVariance: number;
  }

  /**
   * Protocol object for BaseAudioContext
   */
  export interface BaseAudioContext {
    contextId: GraphObjectId;
    contextType: ContextType;
    contextState: ContextState;
    realtimeData?: ContextRealtimeData;
    /**
     * Platform-dependent callback buffer size.
     */
    callbackBufferSize: number;
    /**
     * Number of output channels supported by audio hardware in use.
     */
    maxOutputChannelCount: number;
    /**
     * Context sample rate.
     */
    sampleRate: number;
  }

  /**
   * Protocol object for AudioListener
   */
  export interface AudioListener {
    listenerId: GraphObjectId;
    contextId: GraphObjectId;
  }

  /**
   * Protocol object for AudioNode
   */
  export interface AudioNode {
    nodeId: GraphObjectId;
    contextId: GraphObjectId;
    nodeType: NodeType;
    numberOfInputs: number;
    numberOfOutputs: number;
    channelCount: number;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
  }

  /**
   * Protocol object for AudioParam
   */
  export interface AudioParam {
    paramId: GraphObjectId;
    nodeId: GraphObjectId;
    contextId: GraphObjectId;
    paramType: ParamType;
    rate: AutomationRate;
    defaultValue: number;
    minValue: number;
    maxValue: number;
  }

  export interface GetRealtimeDataRequest {
    contextId: GraphObjectId;
  }

  export interface GetRealtimeDataResponse extends ProtocolResponseWithError {
    realtimeData: ContextRealtimeData;
  }

  /**
   * Notifies that a new BaseAudioContext has been created.
   */
  export interface ContextCreatedEvent {
    context: BaseAudioContext;
  }

  /**
   * Notifies that an existing BaseAudioContext will be destroyed.
   */
  export interface ContextWillBeDestroyedEvent {
    contextId: GraphObjectId;
  }

  /**
   * Notifies that existing BaseAudioContext has changed some properties (id stays the same)..
   */
  export interface ContextChangedEvent {
    context: BaseAudioContext;
  }

  /**
   * Notifies that the construction of an AudioListener has finished.
   */
  export interface AudioListenerCreatedEvent {
    listener: AudioListener;
  }

  /**
   * Notifies that a new AudioListener has been created.
   */
  export interface AudioListenerWillBeDestroyedEvent {
    contextId: GraphObjectId;
    listenerId: GraphObjectId;
  }

  /**
   * Notifies that a new AudioNode has been created.
   */
  export interface AudioNodeCreatedEvent {
    node: AudioNode;
  }

  /**
   * Notifies that an existing AudioNode has been destroyed.
   */
  export interface AudioNodeWillBeDestroyedEvent {
    contextId: GraphObjectId;
    nodeId: GraphObjectId;
  }

  /**
   * Notifies that a new AudioParam has been created.
   */
  export interface AudioParamCreatedEvent {
    param: AudioParam;
  }

  /**
   * Notifies that an existing AudioParam has been destroyed.
   */
  export interface AudioParamWillBeDestroyedEvent {
    contextId: GraphObjectId;
    nodeId: GraphObjectId;
    paramId: GraphObjectId;
  }

  /**
   * Notifies that two AudioNodes are connected.
   */
  export interface NodesConnectedEvent {
    contextId: GraphObjectId;
    sourceId: GraphObjectId;
    destinationId: GraphObjectId;
    sourceOutputIndex?: number;
    destinationInputIndex?: number;
  }

  /**
   * Notifies that AudioNodes are disconnected. The destination can be null, and it means all the outgoing connections from the source are disconnected.
   */
  export interface NodesDisconnectedEvent {
    contextId: GraphObjectId;
    sourceId: GraphObjectId;
    destinationId: GraphObjectId;
    sourceOutputIndex?: number;
    destinationInputIndex?: number;
  }

  /**
   * Notifies that an AudioNode is connected to an AudioParam.
   */
  export interface NodeParamConnectedEvent {
    contextId: GraphObjectId;
    sourceId: GraphObjectId;
    destinationId: GraphObjectId;
    sourceOutputIndex?: number;
  }

  /**
   * Notifies that an AudioNode is disconnected to an AudioParam.
   */
  export interface NodeParamDisconnectedEvent {
    contextId: GraphObjectId;
    sourceId: GraphObjectId;
    destinationId: GraphObjectId;
    sourceOutputIndex?: number;
  }
}

/**
 * This domain allows configuring virtual authenticators to test the WebAuthn
 * API.
 */
export namespace WebAuthn {

  export type AuthenticatorId = OpaqueIdentifier<string, 'Protocol.WebAuthn.AuthenticatorId'>;

  export const enum AuthenticatorProtocol {
    U2f = 'u2f',
    Ctap2 = 'ctap2',
  }

  export const enum Ctap2Version {
    Ctap2_0 = 'ctap2_0',
    Ctap2_1 = 'ctap2_1',
  }

  export const enum AuthenticatorTransport {
    Usb = 'usb',
    Nfc = 'nfc',
    Ble = 'ble',
    Cable = 'cable',
    Internal = 'internal',
  }

  export interface VirtualAuthenticatorOptions {
    protocol: AuthenticatorProtocol;
    /**
     * Defaults to ctap2_0. Ignored if |protocol| == u2f.
     */
    ctap2Version?: Ctap2Version;
    transport: AuthenticatorTransport;
    /**
     * Defaults to false.
     */
    hasResidentKey?: boolean;
    /**
     * Defaults to false.
     */
    hasUserVerification?: boolean;
    /**
     * If set to true, the authenticator will support the largeBlob extension.
     * https://w3c.github.io/webauthn#largeBlob
     * Defaults to false.
     */
    hasLargeBlob?: boolean;
    /**
     * If set to true, the authenticator will support the credBlob extension.
     * https://fidoalliance.org/specs/fido-v2.1-rd-20201208/fido-client-to-authenticator-protocol-v2.1-rd-20201208.html#sctn-credBlob-extension
     * Defaults to false.
     */
    hasCredBlob?: boolean;
    /**
     * If set to true, the authenticator will support the minPinLength extension.
     * https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension
     * Defaults to false.
     */
    hasMinPinLength?: boolean;
    /**
     * If set to true, tests of user presence will succeed immediately.
     * Otherwise, they will not be resolved. Defaults to true.
     */
    automaticPresenceSimulation?: boolean;
    /**
     * Sets whether User Verification succeeds or fails for an authenticator.
     * Defaults to false.
     */
    isUserVerified?: boolean;
  }

  export interface Credential {
    credentialId: binary;
    isResidentCredential: boolean;
    /**
     * Relying Party ID the credential is scoped to. Must be set when adding a
     * credential.
     */
    rpId?: string;
    /**
     * The ECDSA P-256 private key in PKCS#8 format.
     */
    privateKey: binary;
    /**
     * An opaque byte sequence with a maximum size of 64 bytes mapping the
     * credential to a specific user.
     */
    userHandle?: binary;
    /**
     * Signature counter. This is incremented by one for each successful
     * assertion.
     * See https://w3c.github.io/webauthn/#signature-counter
     */
    signCount: integer;
    /**
     * The large blob associated with the credential.
     * See https://w3c.github.io/webauthn/#sctn-large-blob-extension
     */
    largeBlob?: binary;
  }

  export interface EnableRequest {
    /**
     * Whether to enable the WebAuthn user interface. Enabling the UI is
     * recommended for debugging and demo purposes, as it is closer to the real
     * experience. Disabling the UI is recommended for automated testing.
     * Supported at the embedder's discretion if UI is available.
     * Defaults to false.
     */
    enableUI?: boolean;
  }

  export interface AddVirtualAuthenticatorRequest {
    options: VirtualAuthenticatorOptions;
  }

  export interface AddVirtualAuthenticatorResponse extends ProtocolResponseWithError {
    authenticatorId: AuthenticatorId;
  }

  export interface RemoveVirtualAuthenticatorRequest {
    authenticatorId: AuthenticatorId;
  }

  export interface AddCredentialRequest {
    authenticatorId: AuthenticatorId;
    credential: Credential;
  }

  export interface GetCredentialRequest {
    authenticatorId: AuthenticatorId;
    credentialId: binary;
  }

  export interface GetCredentialResponse extends ProtocolResponseWithError {
    credential: Credential;
  }

  export interface GetCredentialsRequest {
    authenticatorId: AuthenticatorId;
  }

  export interface GetCredentialsResponse extends ProtocolResponseWithError {
    credentials: Credential[];
  }

  export interface RemoveCredentialRequest {
    authenticatorId: AuthenticatorId;
    credentialId: binary;
  }

  export interface ClearCredentialsRequest {
    authenticatorId: AuthenticatorId;
  }

  export interface SetUserVerifiedRequest {
    authenticatorId: AuthenticatorId;
    isUserVerified: boolean;
  }

  export interface SetAutomaticPresenceSimulationRequest {
    authenticatorId: AuthenticatorId;
    enabled: boolean;
  }
}

/**
 * This domain allows detailed inspection of media elements
 */
export namespace Media {

  /**
   * Players will get an ID that is unique within the agent context.
   */
  export type PlayerId = OpaqueIdentifier<string, 'Protocol.Media.PlayerId'>;

  export type Timestamp = number;

  export const enum PlayerMessageLevel {
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Debug = 'debug',
  }

  /**
   * Have one type per entry in MediaLogRecord::Type
   * Corresponds to kMessage
   */
  export interface PlayerMessage {
    /**
     * Keep in sync with MediaLogMessageLevel
     * We are currently keeping the message level 'error' separate from the
     * PlayerError type because right now they represent different things,
     * this one being a DVLOG(ERROR) style log message that gets printed
     * based on what log level is selected in the UI, and the other is a
     * representation of a media::PipelineStatus object. Soon however we're
     * going to be moving away from using PipelineStatus for errors and
     * introducing a new error type which should hopefully let us integrate
     * the error log level into the PlayerError type.
     */
    level: PlayerMessageLevel;
    message: string;
  }

  /**
   * Corresponds to kMediaPropertyChange
   */
  export interface PlayerProperty {
    name: string;
    value: string;
  }

  /**
   * Corresponds to kMediaEventTriggered
   */
  export interface PlayerEvent {
    timestamp: Timestamp;
    value: string;
  }

  /**
   * Represents logged source line numbers reported in an error.
   * NOTE: file and line are from chromium c++ implementation code, not js.
   */
  export interface PlayerErrorSourceLocation {
    file: string;
    line: integer;
  }

  /**
   * Corresponds to kMediaError
   */
  export interface PlayerError {
    errorType: string;
    /**
     * Code is the numeric enum entry for a specific set of error codes, such
     * as PipelineStatusCodes in media/base/pipeline_status.h
     */
    code: integer;
    /**
     * A trace of where this error was caused / where it passed through.
     */
    stack: PlayerErrorSourceLocation[];
    /**
     * Errors potentially have a root cause error, ie, a DecoderError might be
     * caused by an WindowsError
     */
    cause: PlayerError[];
    /**
     * Extra data attached to an error, such as an HRESULT, Video Codec, etc.
     */
    data: any;
  }

  /**
   * This can be called multiple times, and can be used to set / override /
   * remove player properties. A null propValue indicates removal.
   */
  export interface PlayerPropertiesChangedEvent {
    playerId: PlayerId;
    properties: PlayerProperty[];
  }

  /**
   * Send events as a list, allowing them to be batched on the browser for less
   * congestion. If batched, events must ALWAYS be in chronological order.
   */
  export interface PlayerEventsAddedEvent {
    playerId: PlayerId;
    events: PlayerEvent[];
  }

  /**
   * Send a list of any messages that need to be delivered.
   */
  export interface PlayerMessagesLoggedEvent {
    playerId: PlayerId;
    messages: PlayerMessage[];
  }

  /**
   * Send a list of any errors that need to be delivered.
   */
  export interface PlayerErrorsRaisedEvent {
    playerId: PlayerId;
    errors: PlayerError[];
  }

  /**
   * Called whenever a player is created, or when a new agent joins and receives
   * a list of active players. If an agent is restored, it will receive the full
   * list of player ids and all events again.
   */
  export interface PlayersCreatedEvent {
    players: PlayerId[];
  }
}

/**
 * Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing
 * breakpoints, stepping through execution, exploring stack traces, etc.
 */
export namespace Debugger {

  /**
   * Breakpoint identifier.
   */
  export type BreakpointId = OpaqueIdentifier<string, 'Protocol.Debugger.BreakpointId'>;

  /**
   * Call frame identifier.
   */
  export type CallFrameId = OpaqueIdentifier<string, 'Protocol.Debugger.CallFrameId'>;

  /**
   * Location in the source code.
   */
  export interface Location {
    /**
     * Script identifier as reported in the `Debugger.scriptParsed`.
     */
    scriptId: Runtime.ScriptId;
    /**
     * Line number in the script (0-based).
     */
    lineNumber: integer;
    /**
     * Column number in the script (0-based).
     */
    columnNumber?: integer;
  }

  /**
   * Location in the source code.
   */
  export interface ScriptPosition {
    lineNumber: integer;
    columnNumber: integer;
  }

  /**
   * Location range within one script.
   */
  export interface LocationRange {
    scriptId: Runtime.ScriptId;
    start: ScriptPosition;
    end: ScriptPosition;
  }

  /**
   * JavaScript call frame. Array of call frames form the call stack.
   */
  export interface CallFrame {
    /**
     * Call frame identifier. This identifier is only valid while the virtual machine is paused.
     */
    callFrameId: CallFrameId;
    /**
     * Name of the JavaScript function called on this call frame.
     */
    functionName: string;
    /**
     * Location in the source code.
     */
    functionLocation?: Location;
    /**
     * Location in the source code.
     */
    location: Location;
    /**
     * JavaScript script name or url.
     * Deprecated in favor of using the `location.scriptId` to resolve the URL via a previously
     * sent `Debugger.scriptParsed` event.
     */
    url: string;
    /**
     * Scope chain for this call frame.
     */
    scopeChain: Scope[];
    /**
     * `this` object for this call frame.
     */
    this: Runtime.RemoteObject;
    /**
     * The value being returned, if the function is at return point.
     */
    returnValue?: Runtime.RemoteObject;
    /**
     * Valid only while the VM is paused and indicates whether this frame
     * can be restarted or not. Note that a `true` value here does not
     * guarantee that Debugger#restartFrame with this CallFrameId will be
     * successful, but it is very likely.
     */
    canBeRestarted?: boolean;
  }

  export const enum ScopeType {
    Global = 'global',
    Local = 'local',
    With = 'with',
    Closure = 'closure',
    Catch = 'catch',
    Block = 'block',
    Script = 'script',
    Eval = 'eval',
    Module = 'module',
    WasmExpressionStack = 'wasm-expression-stack',
  }

  /**
   * Scope description.
   */
  export interface Scope {
    /**
     * Scope type.
     */
    type: ScopeType;
    /**
     * Object representing the scope. For `global` and `with` scopes it represents the actual
     * object; for the rest of the scopes, it is artificial transient object enumerating scope
     * variables as its properties.
     */
    object: Runtime.RemoteObject;
    name?: string;
    /**
     * Location in the source code where scope starts
     */
    startLocation?: Location;
    /**
     * Location in the source code where scope ends
     */
    endLocation?: Location;
  }

  /**
   * Search match for resource.
   */
  export interface SearchMatch {
    /**
     * Line number in resource content.
     */
    lineNumber: number;
    /**
     * Line with match content.
     */
    lineContent: string;
  }

  export const enum BreakLocationType {
    DebuggerStatement = 'debuggerStatement',
    Call = 'call',
    Return = 'return',
  }

  export interface BreakLocation {
    /**
     * Script identifier as reported in the `Debugger.scriptParsed`.
     */
    scriptId: Runtime.ScriptId;
    /**
     * Line number in the script (0-based).
     */
    lineNumber: integer;
    /**
     * Column number in the script (0-based).
     */
    columnNumber?: integer;
    type?: BreakLocationType;
  }

  export interface WasmDisassemblyChunk {
    /**
     * The next chunk of disassembled lines.
     */
    lines: string[];
    /**
     * The bytecode offsets describing the start of each line.
     */
    bytecodeOffsets: integer[];
  }

  /**
   * Enum of possible script languages.
   */
  export const enum ScriptLanguage {
    JavaScript = 'JavaScript',
    WebAssembly = 'WebAssembly',
  }

  export const enum DebugSymbolsType {
    None = 'None',
    SourceMap = 'SourceMap',
    EmbeddedDWARF = 'EmbeddedDWARF',
    ExternalDWARF = 'ExternalDWARF',
  }

  /**
   * Debug symbols available for a wasm script.
   */
  export interface DebugSymbols {
    /**
     * Type of the debug symbols.
     */
    type: DebugSymbolsType;
    /**
     * URL of the external symbol source.
     */
    externalURL?: string;
  }

  export const enum ContinueToLocationRequestTargetCallFrames {
    Any = 'any',
    Current = 'current',
  }

  export interface ContinueToLocationRequest {
    /**
     * Location to continue to.
     */
    location: Location;
    targetCallFrames?: ContinueToLocationRequestTargetCallFrames;
  }

  export interface EnableRequest {
    /**
     * The maximum size in bytes of collected scripts (not referenced by other heap objects)
     * the debugger can hold. Puts no limit if parameter is omitted.
     */
    maxScriptsCacheSize?: number;
  }

  export interface EnableResponse extends ProtocolResponseWithError {
    /**
     * Unique identifier of the debugger.
     */
    debuggerId: Runtime.UniqueDebuggerId;
  }

  export interface EvaluateOnCallFrameRequest {
    /**
     * Call frame identifier to evaluate on.
     */
    callFrameId: CallFrameId;
    /**
     * Expression to evaluate.
     */
    expression: string;
    /**
     * String object group name to put result into (allows rapid releasing resulting object handles
     * using `releaseObjectGroup`).
     */
    objectGroup?: string;
    /**
     * Specifies whether command line API should be available to the evaluated expression, defaults
     * to false.
     */
    includeCommandLineAPI?: boolean;
    /**
     * In silent mode exceptions thrown during evaluation are not reported and do not pause
     * execution. Overrides `setPauseOnException` state.
     */
    silent?: boolean;
    /**
     * Whether the result is expected to be a JSON object that should be sent by value.
     */
    returnByValue?: boolean;
    /**
     * Whether preview should be generated for the result.
     */
    generatePreview?: boolean;
    /**
     * Whether to throw an exception if side effect cannot be ruled out during evaluation.
     */
    throwOnSideEffect?: boolean;
    /**
     * Terminate execution after timing out (number of milliseconds).
     */
    timeout?: Runtime.TimeDelta;
  }

  export interface EvaluateOnCallFrameResponse extends ProtocolResponseWithError {
    /**
     * Object wrapper for the evaluation result.
     */
    result: Runtime.RemoteObject;
    /**
     * Exception details.
     */
    exceptionDetails?: Runtime.ExceptionDetails;
  }

  export interface GetPossibleBreakpointsRequest {
    /**
     * Start of range to search possible breakpoint locations in.
     */
    start: Location;
    /**
     * End of range to search possible breakpoint locations in (excluding). When not specified, end
     * of scripts is used as end of range.
     */
    end?: Location;
    /**
     * Only consider locations which are in the same (non-nested) function as start.
     */
    restrictToFunction?: boolean;
  }

  export interface GetPossibleBreakpointsResponse extends ProtocolResponseWithError {
    /**
     * List of the possible breakpoint locations.
     */
    locations: BreakLocation[];
  }

  export interface GetScriptSourceRequest {
    /**
     * Id of the script to get source for.
     */
    scriptId: Runtime.ScriptId;
  }

  export interface GetScriptSourceResponse extends ProtocolResponseWithError {
    /**
     * Script source (empty in case of Wasm bytecode).
     */
    scriptSource: string;
    /**
     * Wasm bytecode.
     */
    bytecode?: binary;
  }

  export interface DisassembleWasmModuleRequest {
    /**
     * Id of the script to disassemble
     */
    scriptId: Runtime.ScriptId;
  }

  export interface DisassembleWasmModuleResponse extends ProtocolResponseWithError {
    /**
     * For large modules, return a stream from which additional chunks of
     * disassembly can be read successively.
     */
    streamId?: string;
    /**
     * The total number of lines in the disassembly text.
     */
    totalNumberOfLines: integer;
    /**
     * The offsets of all function bodies, in the format [start1, end1,
     * start2, end2, ...] where all ends are exclusive.
     */
    functionBodyOffsets: integer[];
    /**
     * The first chunk of disassembly.
     */
    chunk: WasmDisassemblyChunk;
  }

  export interface NextWasmDisassemblyChunkRequest {
    streamId: string;
  }

  export interface NextWasmDisassemblyChunkResponse extends ProtocolResponseWithError {
    /**
     * The next chunk of disassembly.
     */
    chunk: WasmDisassemblyChunk;
  }

  export interface GetWasmBytecodeRequest {
    /**
     * Id of the Wasm script to get source for.
     */
    scriptId: Runtime.ScriptId;
  }

  export interface GetWasmBytecodeResponse extends ProtocolResponseWithError {
    /**
     * Script source.
     */
    bytecode: binary;
  }

  export interface GetStackTraceRequest {
    stackTraceId: Runtime.StackTraceId;
  }

  export interface GetStackTraceResponse extends ProtocolResponseWithError {
    stackTrace: Runtime.StackTrace;
  }

  export interface PauseOnAsyncCallRequest {
    /**
     * Debugger will pause when async call with given stack trace is started.
     */
    parentStackTraceId: Runtime.StackTraceId;
  }

  export interface RemoveBreakpointRequest {
    breakpointId: BreakpointId;
  }

  export const enum RestartFrameRequestMode {
    StepInto = 'StepInto',
  }

  export interface RestartFrameRequest {
    /**
     * Call frame identifier to evaluate on.
     */
    callFrameId: CallFrameId;
    /**
     * The `mode` parameter must be present and set to 'StepInto', otherwise
     * `restartFrame` will error out.
     */
    mode?: RestartFrameRequestMode;
  }

  export interface RestartFrameResponse extends ProtocolResponseWithError {
    /**
     * New stack trace.
     */
    callFrames: CallFrame[];
    /**
     * Async stack trace, if any.
     */
    asyncStackTrace?: Runtime.StackTrace;
    /**
     * Async stack trace, if any.
     */
    asyncStackTraceId?: Runtime.StackTraceId;
  }

  export interface ResumeRequest {
    /**
     * Set to true to terminate execution upon resuming execution. In contrast
     * to Runtime.terminateExecution, this will allows to execute further
     * JavaScript (i.e. via evaluation) until execution of the paused code
     * is actually resumed, at which point termination is triggered.
     * If execution is currently not paused, this parameter has no effect.
     */
    terminateOnResume?: boolean;
  }

  export interface SearchInContentRequest {
    /**
     * Id of the script to search in.
     */
    scriptId: Runtime.ScriptId;
    /**
     * String to search for.
     */
    query: string;
    /**
     * If true, search is case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * If true, treats string parameter as regex.
     */
    isRegex?: boolean;
  }

  export interface SearchInContentResponse extends ProtocolResponseWithError {
    /**
     * List of search matches.
     */
    result: SearchMatch[];
  }

  export interface SetAsyncCallStackDepthRequest {
    /**
     * Maximum depth of async call stacks. Setting to `0` will effectively disable collecting async
     * call stacks (default).
     */
    maxDepth: integer;
  }

  export interface SetBlackboxPatternsRequest {
    /**
     * Array of regexps that will be used to check script url for blackbox state.
     */
    patterns: string[];
  }

  export interface SetBlackboxedRangesRequest {
    /**
     * Id of the script.
     */
    scriptId: Runtime.ScriptId;
    positions: ScriptPosition[];
  }

  export interface SetBreakpointRequest {
    /**
     * Location to set breakpoint in.
     */
    location: Location;
    /**
     * Expression to use as a breakpoint condition. When specified, debugger will only stop on the
     * breakpoint if this expression evaluates to true.
     */
    condition?: string;
  }

  export interface SetBreakpointResponse extends ProtocolResponseWithError {
    /**
     * Id of the created breakpoint for further reference.
     */
    breakpointId: BreakpointId;
    /**
     * Location this breakpoint resolved into.
     */
    actualLocation: Location;
  }

  export const enum SetInstrumentationBreakpointRequestInstrumentation {
    BeforeScriptExecution = 'beforeScriptExecution',
    BeforeScriptWithSourceMapExecution = 'beforeScriptWithSourceMapExecution',
  }

  export interface SetInstrumentationBreakpointRequest {
    /**
     * Instrumentation name.
     */
    instrumentation: SetInstrumentationBreakpointRequestInstrumentation;
  }

  export interface SetInstrumentationBreakpointResponse extends ProtocolResponseWithError {
    /**
     * Id of the created breakpoint for further reference.
     */
    breakpointId: BreakpointId;
  }

  export interface SetBreakpointByUrlRequest {
    /**
     * Line number to set breakpoint at.
     */
    lineNumber: integer;
    /**
     * URL of the resources to set breakpoint on.
     */
    url?: string;
    /**
     * Regex pattern for the URLs of the resources to set breakpoints on. Either `url` or
     * `urlRegex` must be specified.
     */
    urlRegex?: string;
    /**
     * Script hash of the resources to set breakpoint on.
     */
    scriptHash?: string;
    /**
     * Offset in the line to set breakpoint at.
     */
    columnNumber?: integer;
    /**
     * Expression to use as a breakpoint condition. When specified, debugger will only stop on the
     * breakpoint if this expression evaluates to true.
     */
    condition?: string;
  }

  export interface SetBreakpointByUrlResponse extends ProtocolResponseWithError {
    /**
     * Id of the created breakpoint for further reference.
     */
    breakpointId: BreakpointId;
    /**
     * List of the locations this breakpoint resolved into upon addition.
     */
    locations: Location[];
  }

  export interface SetBreakpointOnFunctionCallRequest {
    /**
     * Function object id.
     */
    objectId: Runtime.RemoteObjectId;
    /**
     * Expression to use as a breakpoint condition. When specified, debugger will
     * stop on the breakpoint if this expression evaluates to true.
     */
    condition?: string;
  }

  export interface SetBreakpointOnFunctionCallResponse extends ProtocolResponseWithError {
    /**
     * Id of the created breakpoint for further reference.
     */
    breakpointId: BreakpointId;
  }

  export interface SetBreakpointsActiveRequest {
    /**
     * New value for breakpoints active state.
     */
    active: boolean;
  }

  export const enum SetPauseOnExceptionsRequestState {
    None = 'none',
    Uncaught = 'uncaught',
    All = 'all',
  }

  export interface SetPauseOnExceptionsRequest {
    /**
     * Pause on exceptions mode.
     */
    state: SetPauseOnExceptionsRequestState;
  }

  export interface SetReturnValueRequest {
    /**
     * New return value.
     */
    newValue: Runtime.CallArgument;
  }

  export const enum SetScriptSourceResponseStatus {
    Ok = 'Ok',
    CompileError = 'CompileError',
    BlockedByActiveGenerator = 'BlockedByActiveGenerator',
    BlockedByActiveFunction = 'BlockedByActiveFunction',
  }

  export interface SetScriptSourceRequest {
    /**
     * Id of the script to edit.
     */
    scriptId: Runtime.ScriptId;
    /**
     * New content of the script.
     */
    scriptSource: string;
    /**
     * If true the change will not actually be applied. Dry run may be used to get result
     * description without actually modifying the code.
     */
    dryRun?: boolean;
    /**
     * If true, then `scriptSource` is allowed to change the function on top of the stack
     * as long as the top-most stack frame is the only activation of that function.
     */
    allowTopFrameEditing?: boolean;
  }

  export interface SetScriptSourceResponse extends ProtocolResponseWithError {
    /**
     * New stack trace in case editing has happened while VM was stopped.
     */
    callFrames?: CallFrame[];
    /**
     * Whether current call stack  was modified after applying the changes.
     */
    stackChanged?: boolean;
    /**
     * Async stack trace, if any.
     */
    asyncStackTrace?: Runtime.StackTrace;
    /**
     * Async stack trace, if any.
     */
    asyncStackTraceId?: Runtime.StackTraceId;
    /**
     * Whether the operation was successful or not. Only `Ok` denotes a
     * successful live edit while the other enum variants denote why
     * the live edit failed.
     */
    status: SetScriptSourceResponseStatus;
    /**
     * Exception details if any. Only present when `status` is `CompileError`.
     */
    exceptionDetails?: Runtime.ExceptionDetails;
  }

  export interface SetSkipAllPausesRequest {
    /**
     * New value for skip pauses state.
     */
    skip: boolean;
  }

  export interface SetVariableValueRequest {
    /**
     * 0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch'
     * scope types are allowed. Other scopes could be manipulated manually.
     */
    scopeNumber: integer;
    /**
     * Variable name.
     */
    variableName: string;
    /**
     * New variable value.
     */
    newValue: Runtime.CallArgument;
    /**
     * Id of callframe that holds variable.
     */
    callFrameId: CallFrameId;
  }

  export interface StepIntoRequest {
    /**
     * Debugger will pause on the execution of the first async task which was scheduled
     * before next pause.
     */
    breakOnAsyncCall?: boolean;
    /**
     * The skipList specifies location ranges that should be skipped on step into.
     */
    skipList?: LocationRange[];
  }

  export interface StepOverRequest {
    /**
     * The skipList specifies location ranges that should be skipped on step over.
     */
    skipList?: LocationRange[];
  }

  /**
   * Fired when breakpoint is resolved to an actual script and location.
   */
  export interface BreakpointResolvedEvent {
    /**
     * Breakpoint unique identifier.
     */
    breakpointId: BreakpointId;
    /**
     * Actual breakpoint location.
     */
    location: Location;
  }

  export const enum PausedEventReason {
    Ambiguous = 'ambiguous',
    Assert = 'assert',
    CSPViolation = 'CSPViolation',
    DebugCommand = 'debugCommand',
    DOM = 'DOM',
    EventListener = 'EventListener',
    Exception = 'exception',
    Instrumentation = 'instrumentation',
    OOM = 'OOM',
    Other = 'other',
    PromiseRejection = 'promiseRejection',
    XHR = 'XHR',
  }

  /**
   * Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.
   */
  export interface PausedEvent {
    /**
     * Call stack the virtual machine stopped on.
     */
    callFrames: CallFrame[];
    /**
     * Pause reason.
     */
    reason: PausedEventReason;
    /**
     * Object containing break-specific auxiliary properties.
     */
    data?: any;
    /**
     * Hit breakpoints IDs
     */
    hitBreakpoints?: string[];
    /**
     * Async stack trace, if any.
     */
    asyncStackTrace?: Runtime.StackTrace;
    /**
     * Async stack trace, if any.
     */
    asyncStackTraceId?: Runtime.StackTraceId;
    /**
     * Never present, will be removed.
     */
    asyncCallStackTraceId?: Runtime.StackTraceId;
  }

  /**
   * Fired when virtual machine fails to parse the script.
   */
  export interface ScriptFailedToParseEvent {
    /**
     * Identifier of the script parsed.
     */
    scriptId: Runtime.ScriptId;
    /**
     * URL or name of the script parsed (if any).
     */
    url: string;
    /**
     * Line offset of the script within the resource with given URL (for script tags).
     */
    startLine: integer;
    /**
     * Column offset of the script within the resource with given URL.
     */
    startColumn: integer;
    /**
     * Last line of the script.
     */
    endLine: integer;
    /**
     * Length of the last line of the script.
     */
    endColumn: integer;
    /**
     * Specifies script creation context.
     */
    executionContextId: Runtime.ExecutionContextId;
    /**
     * Content hash of the script, SHA-256.
     */
    hash: string;
    /**
     * Embedder-specific auxiliary data.
     */
    executionContextAuxData?: any;
    /**
     * URL of source map associated with script (if any).
     */
    sourceMapURL?: string;
    /**
     * True, if this script has sourceURL.
     */
    hasSourceURL?: boolean;
    /**
     * True, if this script is ES6 module.
     */
    isModule?: boolean;
    /**
     * This script length.
     */
    length?: integer;
    /**
     * JavaScript top stack frame of where the script parsed event was triggered if available.
     */
    stackTrace?: Runtime.StackTrace;
    /**
     * If the scriptLanguage is WebAssembly, the code section offset in the module.
     */
    codeOffset?: integer;
    /**
     * The language of the script.
     */
    scriptLanguage?: Debugger.ScriptLanguage;
    /**
     * The name the embedder supplied for this script.
     */
    embedderName?: string;
  }

  /**
   * Fired when virtual machine parses script. This event is also fired for all known and uncollected
   * scripts upon enabling debugger.
   */
  export interface ScriptParsedEvent {
    /**
     * Identifier of the script parsed.
     */
    scriptId: Runtime.ScriptId;
    /**
     * URL or name of the script parsed (if any).
     */
    url: string;
    /**
     * Line offset of the script within the resource with given URL (for script tags).
     */
    startLine: integer;
    /**
     * Column offset of the script within the resource with given URL.
     */
    startColumn: integer;
    /**
     * Last line of the script.
     */
    endLine: integer;
    /**
     * Length of the last line of the script.
     */
    endColumn: integer;
    /**
     * Specifies script creation context.
     */
    executionContextId: Runtime.ExecutionContextId;
    /**
     * Content hash of the script, SHA-256.
     */
    hash: string;
    /**
     * Embedder-specific auxiliary data.
     */
    executionContextAuxData?: any;
    /**
     * True, if this script is generated as a result of the live edit operation.
     */
    isLiveEdit?: boolean;
    /**
     * URL of source map associated with script (if any).
     */
    sourceMapURL?: string;
    /**
     * True, if this script has sourceURL.
     */
    hasSourceURL?: boolean;
    /**
     * True, if this script is ES6 module.
     */
    isModule?: boolean;
    /**
     * This script length.
     */
    length?: integer;
    /**
     * JavaScript top stack frame of where the script parsed event was triggered if available.
     */
    stackTrace?: Runtime.StackTrace;
    /**
     * If the scriptLanguage is WebAssembly, the code section offset in the module.
     */
    codeOffset?: integer;
    /**
     * The language of the script.
     */
    scriptLanguage?: Debugger.ScriptLanguage;
    /**
     * If the scriptLanguage is WebASsembly, the source of debug symbols for the module.
     */
    debugSymbols?: Debugger.DebugSymbols;
    /**
     * The name the embedder supplied for this script.
     */
    embedderName?: string;
  }
}

export namespace HeapProfiler {

  /**
   * Heap snapshot object id.
   */
  export type HeapSnapshotObjectId = OpaqueIdentifier<string, 'Protocol.HeapProfiler.HeapSnapshotObjectId'>;

  /**
   * Sampling Heap Profile node. Holds callsite information, allocation statistics and child nodes.
   */
  export interface SamplingHeapProfileNode {
    /**
     * Function location.
     */
    callFrame: Runtime.CallFrame;
    /**
     * Allocations size in bytes for the node excluding children.
     */
    selfSize: number;
    /**
     * Node id. Ids are unique across all profiles collected between startSampling and stopSampling.
     */
    id: integer;
    /**
     * Child nodes.
     */
    children: SamplingHeapProfileNode[];
  }

  /**
   * A single sample from a sampling profile.
   */
  export interface SamplingHeapProfileSample {
    /**
     * Allocation size in bytes attributed to the sample.
     */
    size: number;
    /**
     * Id of the corresponding profile tree node.
     */
    nodeId: integer;
    /**
     * Time-ordered sample ordinal number. It is unique across all profiles retrieved
     * between startSampling and stopSampling.
     */
    ordinal: number;
  }

  /**
   * Sampling profile.
   */
  export interface SamplingHeapProfile {
    head: SamplingHeapProfileNode;
    samples: SamplingHeapProfileSample[];
  }

  export interface AddInspectedHeapObjectRequest {
    /**
     * Heap snapshot object id to be accessible by means of $x command line API.
     */
    heapObjectId: HeapSnapshotObjectId;
  }

  export interface GetHeapObjectIdRequest {
    /**
     * Identifier of the object to get heap object id for.
     */
    objectId: Runtime.RemoteObjectId;
  }

  export interface GetHeapObjectIdResponse extends ProtocolResponseWithError {
    /**
     * Id of the heap snapshot object corresponding to the passed remote object id.
     */
    heapSnapshotObjectId: HeapSnapshotObjectId;
  }

  export interface GetObjectByHeapObjectIdRequest {
    objectId: HeapSnapshotObjectId;
    /**
     * Symbolic group name that can be used to release multiple objects.
     */
    objectGroup?: string;
  }

  export interface GetObjectByHeapObjectIdResponse extends ProtocolResponseWithError {
    /**
     * Evaluation result.
     */
    result: Runtime.RemoteObject;
  }

  export interface GetSamplingProfileResponse extends ProtocolResponseWithError {
    /**
     * Return the sampling profile being collected.
     */
    profile: SamplingHeapProfile;
  }

  export interface StartSamplingRequest {
    /**
     * Average sample interval in bytes. Poisson distribution is used for the intervals. The
     * default value is 32768 bytes.
     */
    samplingInterval?: number;
  }

  export interface StartTrackingHeapObjectsRequest {
    trackAllocations?: boolean;
  }

  export interface StopSamplingResponse extends ProtocolResponseWithError {
    /**
     * Recorded sampling heap profile.
     */
    profile: SamplingHeapProfile;
  }

  export interface StopTrackingHeapObjectsRequest {
    /**
     * If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken
     * when the tracking is stopped.
     */
    reportProgress?: boolean;
    /**
     * Deprecated in favor of `exposeInternals`.
     */
    treatGlobalObjectsAsRoots?: boolean;
    /**
     * If true, numerical values are included in the snapshot
     */
    captureNumericValue?: boolean;
    /**
     * If true, exposes internals of the snapshot.
     */
    exposeInternals?: boolean;
  }

  export interface TakeHeapSnapshotRequest {
    /**
     * If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken.
     */
    reportProgress?: boolean;
    /**
     * If true, a raw snapshot without artificial roots will be generated.
     * Deprecated in favor of `exposeInternals`.
     */
    treatGlobalObjectsAsRoots?: boolean;
    /**
     * If true, numerical values are included in the snapshot
     */
    captureNumericValue?: boolean;
    /**
     * If true, exposes internals of the snapshot.
     */
    exposeInternals?: boolean;
  }

  export interface AddHeapSnapshotChunkEvent {
    chunk: string;
  }

  /**
   * If heap objects tracking has been started then backend may send update for one or more fragments
   */
  export interface HeapStatsUpdateEvent {
    /**
     * An array of triplets. Each triplet describes a fragment. The first integer is the fragment
     * index, the second integer is a total count of objects for the fragment, the third integer is
     * a total size of the objects for the fragment.
     */
    statsUpdate: integer[];
  }

  /**
   * If heap objects tracking has been started then backend regularly sends a current value for last
   * seen object id and corresponding timestamp. If the were changes in the heap since last event
   * then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.
   */
  export interface LastSeenObjectIdEvent {
    lastSeenObjectId: integer;
    timestamp: number;
  }

  export interface ReportHeapSnapshotProgressEvent {
    done: integer;
    total: integer;
    finished?: boolean;
  }
}

export namespace Profiler {

  /**
   * Profile node. Holds callsite information, execution statistics and child nodes.
   */
  export interface ProfileNode {
    /**
     * Unique id of the node.
     */
    id: integer;
    /**
     * Function location.
     */
    callFrame: Runtime.CallFrame;
    /**
     * Number of samples where this node was on top of the call stack.
     */
    hitCount?: integer;
    /**
     * Child node ids.
     */
    children?: integer[];
    /**
     * The reason of being not optimized. The function may be deoptimized or marked as don't
     * optimize.
     */
    deoptReason?: string;
    /**
     * An array of source position ticks.
     */
    positionTicks?: PositionTickInfo[];
  }

  /**
   * Profile.
   */
  export interface Profile {
    /**
     * The list of profile nodes. First item is the root node.
     */
    nodes: ProfileNode[];
    /**
     * Profiling start timestamp in microseconds.
     */
    startTime: number;
    /**
     * Profiling end timestamp in microseconds.
     */
    endTime: number;
    /**
     * Ids of samples top nodes.
     */
    samples?: integer[];
    /**
     * Time intervals between adjacent samples in microseconds. The first delta is relative to the
     * profile startTime.
     */
    timeDeltas?: integer[];
  }

  /**
   * Specifies a number of samples attributed to a certain source position.
   */
  export interface PositionTickInfo {
    /**
     * Source line number (1-based).
     */
    line: integer;
    /**
     * Number of samples attributed to the source line.
     */
    ticks: integer;
  }

  /**
   * Coverage data for a source range.
   */
  export interface CoverageRange {
    /**
     * JavaScript script source offset for the range start.
     */
    startOffset: integer;
    /**
     * JavaScript script source offset for the range end.
     */
    endOffset: integer;
    /**
     * Collected execution count of the source range.
     */
    count: integer;
  }

  /**
   * Coverage data for a JavaScript function.
   */
  export interface FunctionCoverage {
    /**
     * JavaScript function name.
     */
    functionName: string;
    /**
     * Source ranges inside the function with coverage data.
     */
    ranges: CoverageRange[];
    /**
     * Whether coverage data for this function has block granularity.
     */
    isBlockCoverage: boolean;
  }

  /**
   * Coverage data for a JavaScript script.
   */
  export interface ScriptCoverage {
    /**
     * JavaScript script id.
     */
    scriptId: Runtime.ScriptId;
    /**
     * JavaScript script name or url.
     */
    url: string;
    /**
     * Functions contained in the script that has coverage data.
     */
    functions: FunctionCoverage[];
  }

  /**
   * Describes a type collected during runtime.
   */
  export interface TypeObject {
    /**
     * Name of a type collected with type profiling.
     */
    name: string;
  }

  /**
   * Source offset and types for a parameter or return value.
   */
  export interface TypeProfileEntry {
    /**
     * Source offset of the parameter or end of function for return values.
     */
    offset: integer;
    /**
     * The types for this parameter or return value.
     */
    types: TypeObject[];
  }

  /**
   * Type profile data collected during runtime for a JavaScript script.
   */
  export interface ScriptTypeProfile {
    /**
     * JavaScript script id.
     */
    scriptId: Runtime.ScriptId;
    /**
     * JavaScript script name or url.
     */
    url: string;
    /**
     * Type profile entries for parameters and return values of the functions in the script.
     */
    entries: TypeProfileEntry[];
  }

  export interface GetBestEffortCoverageResponse extends ProtocolResponseWithError {
    /**
     * Coverage data for the current isolate.
     */
    result: ScriptCoverage[];
  }

  export interface SetSamplingIntervalRequest {
    /**
     * New sampling interval in microseconds.
     */
    interval: integer;
  }

  export interface StartPreciseCoverageRequest {
    /**
     * Collect accurate call counts beyond simple 'covered' or 'not covered'.
     */
    callCount?: boolean;
    /**
     * Collect block-based coverage.
     */
    detailed?: boolean;
    /**
     * Allow the backend to send updates on its own initiative
     */
    allowTriggeredUpdates?: boolean;
  }

  export interface StartPreciseCoverageResponse extends ProtocolResponseWithError {
    /**
     * Monotonically increasing time (in seconds) when the coverage update was taken in the backend.
     */
    timestamp: number;
  }

  export interface StopResponse extends ProtocolResponseWithError {
    /**
     * Recorded profile.
     */
    profile: Profile;
  }

  export interface TakePreciseCoverageResponse extends ProtocolResponseWithError {
    /**
     * Coverage data for the current isolate.
     */
    result: ScriptCoverage[];
    /**
     * Monotonically increasing time (in seconds) when the coverage update was taken in the backend.
     */
    timestamp: number;
  }

  export interface TakeTypeProfileResponse extends ProtocolResponseWithError {
    /**
     * Type profile for all scripts since startTypeProfile() was turned on.
     */
    result: ScriptTypeProfile[];
  }

  export interface ConsoleProfileFinishedEvent {
    id: string;
    /**
     * Location of console.profileEnd().
     */
    location: Debugger.Location;
    profile: Profile;
    /**
     * Profile title passed as an argument to console.profile().
     */
    title?: string;
  }

  /**
   * Sent when new profile recording is started using console.profile() call.
   */
  export interface ConsoleProfileStartedEvent {
    id: string;
    /**
     * Location of console.profile().
     */
    location: Debugger.Location;
    /**
     * Profile title passed as an argument to console.profile().
     */
    title?: string;
  }

  /**
   * Reports coverage delta since the last poll (either from an event like this, or from
   * `takePreciseCoverage` for the current isolate. May only be sent if precise code
   * coverage has been started. This event can be trigged by the embedder to, for example,
   * trigger collection of coverage data immediately at a certain point in time.
   */
  export interface PreciseCoverageDeltaUpdateEvent {
    /**
     * Monotonically increasing time (in seconds) when the coverage update was taken in the backend.
     */
    timestamp: number;
    /**
     * Identifier for distinguishing coverage events.
     */
    occasion: string;
    /**
     * Coverage data for the current isolate.
     */
    result: ScriptCoverage[];
  }
}

/**
 * Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects.
 * Evaluation results are returned as mirror object that expose object type, string representation
 * and unique identifier that can be used for further object reference. Original objects are
 * maintained in memory unless they are either explicitly released or are released along with the
 * other objects in their object group.
 */
export namespace Runtime {

  /**
   * Unique script identifier.
   */
  export type ScriptId = OpaqueIdentifier<string, 'Protocol.Runtime.ScriptId'>;

  export const enum WebDriverValueType {
    Undefined = 'undefined',
    Null = 'null',
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    Bigint = 'bigint',
    Regexp = 'regexp',
    Date = 'date',
    Symbol = 'symbol',
    Array = 'array',
    Object = 'object',
    Function = 'function',
    Map = 'map',
    Set = 'set',
    Weakmap = 'weakmap',
    Weakset = 'weakset',
    Error = 'error',
    Proxy = 'proxy',
    Promise = 'promise',
    Typedarray = 'typedarray',
    Arraybuffer = 'arraybuffer',
    Node = 'node',
    Window = 'window',
  }

  /**
   * Represents the value serialiazed by the WebDriver BiDi specification
   * https://w3c.github.io/webdriver-bidi.
   */
  export interface WebDriverValue {
    type: WebDriverValueType;
    value?: any;
    objectId?: string;
  }

  /**
   * Unique object identifier.
   */
  export type RemoteObjectId = OpaqueIdentifier<string, 'Protocol.Runtime.RemoteObjectId'>;

  /**
   * Primitive value which cannot be JSON-stringified. Includes values `-0`, `NaN`, `Infinity`,
   * `-Infinity`, and bigint literals.
   */
  export type UnserializableValue = string;

  export const enum RemoteObjectType {
    Object = 'object',
    Function = 'function',
    Undefined = 'undefined',
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    Symbol = 'symbol',
    Bigint = 'bigint',
  }

  export const enum RemoteObjectSubtype {
    Array = 'array',
    Null = 'null',
    Node = 'node',
    Regexp = 'regexp',
    Date = 'date',
    Map = 'map',
    Set = 'set',
    Weakmap = 'weakmap',
    Weakset = 'weakset',
    Iterator = 'iterator',
    Generator = 'generator',
    Error = 'error',
    Proxy = 'proxy',
    Promise = 'promise',
    Typedarray = 'typedarray',
    Arraybuffer = 'arraybuffer',
    Dataview = 'dataview',
    Webassemblymemory = 'webassemblymemory',
    Wasmvalue = 'wasmvalue',
  }

  /**
   * Mirror object referencing original JavaScript object.
   */
  export interface RemoteObject {
    /**
     * Object type.
     */
    type: RemoteObjectType;
    /**
     * Object subtype hint. Specified for `object` type values only.
     * NOTE: If you change anything here, make sure to also update
     * `subtype` in `ObjectPreview` and `PropertyPreview` below.
     */
    subtype?: RemoteObjectSubtype;
    /**
     * Object class (constructor) name. Specified for `object` type values only.
     */
    className?: string;
    /**
     * Remote object value in case of primitive values or JSON values (if it was requested).
     */
    value?: any;
    /**
     * Primitive value which can not be JSON-stringified does not have `value`, but gets this
     * property.
     */
    unserializableValue?: UnserializableValue;
    /**
     * String representation of the object.
     */
    description?: string;
    /**
     * WebDriver BiDi representation of the value.
     */
    webDriverValue?: WebDriverValue;
    /**
     * Unique object identifier (for non-primitive values).
     */
    objectId?: RemoteObjectId;
    /**
     * Preview containing abbreviated property values. Specified for `object` type values only.
     */
    preview?: ObjectPreview;
    customPreview?: CustomPreview;
  }

  export interface CustomPreview {
    /**
     * The JSON-stringified result of formatter.header(object, config) call.
     * It contains json ML array that represents RemoteObject.
     */
    header: string;
    /**
     * If formatter returns true as a result of formatter.hasBody call then bodyGetterId will
     * contain RemoteObjectId for the function that returns result of formatter.body(object, config) call.
     * The result value is json ML array.
     */
    bodyGetterId?: RemoteObjectId;
  }

  export const enum ObjectPreviewType {
    Object = 'object',
    Function = 'function',
    Undefined = 'undefined',
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    Symbol = 'symbol',
    Bigint = 'bigint',
  }

  export const enum ObjectPreviewSubtype {
    Array = 'array',
    Null = 'null',
    Node = 'node',
    Regexp = 'regexp',
    Date = 'date',
    Map = 'map',
    Set = 'set',
    Weakmap = 'weakmap',
    Weakset = 'weakset',
    Iterator = 'iterator',
    Generator = 'generator',
    Error = 'error',
    Proxy = 'proxy',
    Promise = 'promise',
    Typedarray = 'typedarray',
    Arraybuffer = 'arraybuffer',
    Dataview = 'dataview',
    Webassemblymemory = 'webassemblymemory',
    Wasmvalue = 'wasmvalue',
  }

  /**
   * Object containing abbreviated remote object value.
   */
  export interface ObjectPreview {
    /**
     * Object type.
     */
    type: ObjectPreviewType;
    /**
     * Object subtype hint. Specified for `object` type values only.
     */
    subtype?: ObjectPreviewSubtype;
    /**
     * String representation of the object.
     */
    description?: string;
    /**
     * True iff some of the properties or entries of the original object did not fit.
     */
    overflow: boolean;
    /**
     * List of the properties.
     */
    properties: PropertyPreview[];
    /**
     * List of the entries. Specified for `map` and `set` subtype values only.
     */
    entries?: EntryPreview[];
  }

  export const enum PropertyPreviewType {
    Object = 'object',
    Function = 'function',
    Undefined = 'undefined',
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    Symbol = 'symbol',
    Accessor = 'accessor',
    Bigint = 'bigint',
  }

  export const enum PropertyPreviewSubtype {
    Array = 'array',
    Null = 'null',
    Node = 'node',
    Regexp = 'regexp',
    Date = 'date',
    Map = 'map',
    Set = 'set',
    Weakmap = 'weakmap',
    Weakset = 'weakset',
    Iterator = 'iterator',
    Generator = 'generator',
    Error = 'error',
    Proxy = 'proxy',
    Promise = 'promise',
    Typedarray = 'typedarray',
    Arraybuffer = 'arraybuffer',
    Dataview = 'dataview',
    Webassemblymemory = 'webassemblymemory',
    Wasmvalue = 'wasmvalue',
  }

  export interface PropertyPreview {
    /**
     * Property name.
     */
    name: string;
    /**
     * Object type. Accessor means that the property itself is an accessor property.
     */
    type: PropertyPreviewType;
    /**
     * User-friendly property value string.
     */
    value?: string;
    /**
     * Nested value preview.
     */
    valuePreview?: ObjectPreview;
    /**
     * Object subtype hint. Specified for `object` type values only.
     */
    subtype?: PropertyPreviewSubtype;
  }

  export interface EntryPreview {
    /**
     * Preview of the key. Specified for map-like collection entries.
     */
    key?: ObjectPreview;
    /**
     * Preview of the value.
     */
    value: ObjectPreview;
  }

  /**
   * Object property descriptor.
   */
  export interface PropertyDescriptor {
    /**
     * Property name or symbol description.
     */
    name: string;
    /**
     * The value associated with the property.
     */
    value?: RemoteObject;
    /**
     * True if the value associated with the property may be changed (data descriptors only).
     */
    writable?: boolean;
    /**
     * A function which serves as a getter for the property, or `undefined` if there is no getter
     * (accessor descriptors only).
     */
    get?: RemoteObject;
    /**
     * A function which serves as a setter for the property, or `undefined` if there is no setter
     * (accessor descriptors only).
     */
    set?: RemoteObject;
    /**
     * True if the type of this property descriptor may be changed and if the property may be
     * deleted from the corresponding object.
     */
    configurable: boolean;
    /**
     * True if this property shows up during enumeration of the properties on the corresponding
     * object.
     */
    enumerable: boolean;
    /**
     * True if the result was thrown during the evaluation.
     */
    wasThrown?: boolean;
    /**
     * True if the property is owned for the object.
     */
    isOwn?: boolean;
    /**
     * Property symbol object, if the property is of the `symbol` type.
     */
    symbol?: RemoteObject;
  }

  /**
   * Object internal property descriptor. This property isn't normally visible in JavaScript code.
   */
  export interface InternalPropertyDescriptor {
    /**
     * Conventional property name.
     */
    name: string;
    /**
     * The value associated with the property.
     */
    value?: RemoteObject;
  }

  /**
   * Object private field descriptor.
   */
  export interface PrivatePropertyDescriptor {
    /**
     * Private property name.
     */
    name: string;
    /**
     * The value associated with the private property.
     */
    value?: RemoteObject;
    /**
     * A function which serves as a getter for the private property,
     * or `undefined` if there is no getter (accessor descriptors only).
     */
    get?: RemoteObject;
    /**
     * A function which serves as a setter for the private property,
     * or `undefined` if there is no setter (accessor descriptors only).
     */
    set?: RemoteObject;
  }

  /**
   * Represents function call argument. Either remote object id `objectId`, primitive `value`,
   * unserializable primitive value or neither of (for undefined) them should be specified.
   */
  export interface CallArgument {
    /**
     * Primitive value or serializable javascript object.
     */
    value?: any;
    /**
     * Primitive value which can not be JSON-stringified.
     */
    unserializableValue?: UnserializableValue;
    /**
     * Remote object handle.
     */
    objectId?: RemoteObjectId;
  }

  /**
   * Id of an execution context.
   */
  export type ExecutionContextId = OpaqueIdentifier<integer, 'Protocol.Runtime.ExecutionContextId'>;

  /**
   * Description of an isolated world.
   */
  export interface ExecutionContextDescription {
    /**
     * Unique id of the execution context. It can be used to specify in which execution context
     * script evaluation should be performed.
     */
    id: ExecutionContextId;
    /**
     * Execution context origin.
     */
    origin: string;
    /**
     * Human readable name describing given context.
     */
    name: string;
    /**
     * A system-unique execution context identifier. Unlike the id, this is unique across
     * multiple processes, so can be reliably used to identify specific context while backend
     * performs a cross-process navigation.
     */
    uniqueId: string;
    /**
     * Embedder-specific auxiliary data.
     */
    auxData?: any;
  }

  /**
   * Detailed information about exception (or error) that was thrown during script compilation or
   * execution.
   */
  export interface ExceptionDetails {
    /**
     * Exception id.
     */
    exceptionId: integer;
    /**
     * Exception text, which should be used together with exception object when available.
     */
    text: string;
    /**
     * Line number of the exception location (0-based).
     */
    lineNumber: integer;
    /**
     * Column number of the exception location (0-based).
     */
    columnNumber: integer;
    /**
     * Script ID of the exception location.
     */
    scriptId?: ScriptId;
    /**
     * URL of the exception location, to be used when the script was not reported.
     */
    url?: string;
    /**
     * JavaScript stack trace if available.
     */
    stackTrace?: StackTrace;
    /**
     * Exception object if available.
     */
    exception?: RemoteObject;
    /**
     * Identifier of the context where exception happened.
     */
    executionContextId?: ExecutionContextId;
    /**
     * Dictionary with entries of meta data that the client associated
     * with this exception, such as information about associated network
     * requests, etc.
     */
    exceptionMetaData?: any;
  }

  /**
   * Number of milliseconds since epoch.
   */
  export type Timestamp = number;

  /**
   * Number of milliseconds.
   */
  export type TimeDelta = number;

  /**
   * Stack entry for runtime errors and assertions.
   */
  export interface CallFrame {
    /**
     * JavaScript function name.
     */
    functionName: string;
    /**
     * JavaScript script id.
     */
    scriptId: ScriptId;
    /**
     * JavaScript script name or url.
     */
    url: string;
    /**
     * JavaScript script line number (0-based).
     */
    lineNumber: integer;
    /**
     * JavaScript script column number (0-based).
     */
    columnNumber: integer;
  }

  /**
   * Call frames for assertions or error messages.
   */
  export interface StackTrace {
    /**
     * String label of this stack trace. For async traces this may be a name of the function that
     * initiated the async call.
     */
    description?: string;
    /**
     * JavaScript function name.
     */
    callFrames: CallFrame[];
    /**
     * Asynchronous JavaScript stack trace that preceded this stack, if available.
     */
    parent?: StackTrace;
    /**
     * Asynchronous JavaScript stack trace that preceded this stack, if available.
     */
    parentId?: StackTraceId;
  }

  /**
   * Unique identifier of current debugger.
   */
  export type UniqueDebuggerId = OpaqueIdentifier<string, 'Protocol.Runtime.UniqueDebuggerId'>;

  /**
   * If `debuggerId` is set stack trace comes from another debugger and can be resolved there. This
   * allows to track cross-debugger calls. See `Runtime.StackTrace` and `Debugger.paused` for usages.
   */
  export interface StackTraceId {
    id: string;
    debuggerId?: UniqueDebuggerId;
  }

  export interface AwaitPromiseRequest {
    /**
     * Identifier of the promise.
     */
    promiseObjectId: RemoteObjectId;
    /**
     * Whether the result is expected to be a JSON object that should be sent by value.
     */
    returnByValue?: boolean;
    /**
     * Whether preview should be generated for the result.
     */
    generatePreview?: boolean;
  }

  export interface AwaitPromiseResponse extends ProtocolResponseWithError {
    /**
     * Promise result. Will contain rejected value if promise was rejected.
     */
    result: RemoteObject;
    /**
     * Exception details if stack strace is available.
     */
    exceptionDetails?: ExceptionDetails;
  }

  export interface CallFunctionOnRequest {
    /**
     * Declaration of the function to call.
     */
    functionDeclaration: string;
    /**
     * Identifier of the object to call function on. Either objectId or executionContextId should
     * be specified.
     */
    objectId?: RemoteObjectId;
    /**
     * Call arguments. All call arguments must belong to the same JavaScript world as the target
     * object.
     */
    arguments?: CallArgument[];
    /**
     * In silent mode exceptions thrown during evaluation are not reported and do not pause
     * execution. Overrides `setPauseOnException` state.
     */
    silent?: boolean;
    /**
     * Whether the result is expected to be a JSON object which should be sent by value.
     */
    returnByValue?: boolean;
    /**
     * Whether preview should be generated for the result.
     */
    generatePreview?: boolean;
    /**
     * Whether execution should be treated as initiated by user in the UI.
     */
    userGesture?: boolean;
    /**
     * Whether execution should `await` for resulting value and return once awaited promise is
     * resolved.
     */
    awaitPromise?: boolean;
    /**
     * Specifies execution context which global object will be used to call function on. Either
     * executionContextId or objectId should be specified.
     */
    executionContextId?: ExecutionContextId;
    /**
     * Symbolic group name that can be used to release multiple objects. If objectGroup is not
     * specified and objectId is, objectGroup will be inherited from object.
     */
    objectGroup?: string;
    /**
     * Whether to throw an exception if side effect cannot be ruled out during evaluation.
     */
    throwOnSideEffect?: boolean;
    /**
     * Whether the result should contain `webDriverValue`, serialized according to
     * https://w3c.github.io/webdriver-bidi. This is mutually exclusive with `returnByValue`, but
     * resulting `objectId` is still provided.
     */
    generateWebDriverValue?: boolean;
  }

  export interface CallFunctionOnResponse extends ProtocolResponseWithError {
    /**
     * Call result.
     */
    result: RemoteObject;
    /**
     * Exception details.
     */
    exceptionDetails?: ExceptionDetails;
  }

  export interface CompileScriptRequest {
    /**
     * Expression to compile.
     */
    expression: string;
    /**
     * Source url to be set for the script.
     */
    sourceURL: string;
    /**
     * Specifies whether the compiled script should be persisted.
     */
    persistScript: boolean;
    /**
     * Specifies in which execution context to perform script run. If the parameter is omitted the
     * evaluation will be performed in the context of the inspected page.
     */
    executionContextId?: ExecutionContextId;
  }

  export interface CompileScriptResponse extends ProtocolResponseWithError {
    /**
     * Id of the script.
     */
    scriptId?: ScriptId;
    /**
     * Exception details.
     */
    exceptionDetails?: ExceptionDetails;
  }

  export interface EvaluateRequest {
    /**
     * Expression to evaluate.
     */
    expression: string;
    /**
     * Symbolic group name that can be used to release multiple objects.
     */
    objectGroup?: string;
    /**
     * Determines whether Command Line API should be available during the evaluation.
     */
    includeCommandLineAPI?: boolean;
    /**
     * In silent mode exceptions thrown during evaluation are not reported and do not pause
     * execution. Overrides `setPauseOnException` state.
     */
    silent?: boolean;
    /**
     * Specifies in which execution context to perform evaluation. If the parameter is omitted the
     * evaluation will be performed in the context of the inspected page.
     * This is mutually exclusive with `uniqueContextId`, which offers an
     * alternative way to identify the execution context that is more reliable
     * in a multi-process environment.
     */
    contextId?: ExecutionContextId;
    /**
     * Whether the result is expected to be a JSON object that should be sent by value.
     */
    returnByValue?: boolean;
    /**
     * Whether preview should be generated for the result.
     */
    generatePreview?: boolean;
    /**
     * Whether execution should be treated as initiated by user in the UI.
     */
    userGesture?: boolean;
    /**
     * Whether execution should `await` for resulting value and return once awaited promise is
     * resolved.
     */
    awaitPromise?: boolean;
    /**
     * Whether to throw an exception if side effect cannot be ruled out during evaluation.
     * This implies `disableBreaks` below.
     */
    throwOnSideEffect?: boolean;
    /**
     * Terminate execution after timing out (number of milliseconds).
     */
    timeout?: TimeDelta;
    /**
     * Disable breakpoints during execution.
     */
    disableBreaks?: boolean;
    /**
     * Setting this flag to true enables `let` re-declaration and top-level `await`.
     * Note that `let` variables can only be re-declared if they originate from
     * `replMode` themselves.
     */
    replMode?: boolean;
    /**
     * The Content Security Policy (CSP) for the target might block 'unsafe-eval'
     * which includes eval(), Function(), setTimeout() and setInterval()
     * when called with non-callable arguments. This flag bypasses CSP for this
     * evaluation and allows unsafe-eval. Defaults to true.
     */
    allowUnsafeEvalBlockedByCSP?: boolean;
    /**
     * An alternative way to specify the execution context to evaluate in.
     * Compared to contextId that may be reused across processes, this is guaranteed to be
     * system-unique, so it can be used to prevent accidental evaluation of the expression
     * in context different than intended (e.g. as a result of navigation across process
     * boundaries).
     * This is mutually exclusive with `contextId`.
     */
    uniqueContextId?: string;
    /**
     * Whether the result should be serialized according to https://w3c.github.io/webdriver-bidi.
     */
    generateWebDriverValue?: boolean;
  }

  export interface EvaluateResponse extends ProtocolResponseWithError {
    /**
     * Evaluation result.
     */
    result: RemoteObject;
    /**
     * Exception details.
     */
    exceptionDetails?: ExceptionDetails;
  }

  export interface GetIsolateIdResponse extends ProtocolResponseWithError {
    /**
     * The isolate id.
     */
    id: string;
  }

  export interface GetHeapUsageResponse extends ProtocolResponseWithError {
    /**
     * Used heap size in bytes.
     */
    usedSize: number;
    /**
     * Allocated heap size in bytes.
     */
    totalSize: number;
  }

  export interface GetPropertiesRequest {
    /**
     * Identifier of the object to return properties for.
     */
    objectId: RemoteObjectId;
    /**
     * If true, returns properties belonging only to the element itself, not to its prototype
     * chain.
     */
    ownProperties?: boolean;
    /**
     * If true, returns accessor properties (with getter/setter) only; internal properties are not
     * returned either.
     */
    accessorPropertiesOnly?: boolean;
    /**
     * Whether preview should be generated for the results.
     */
    generatePreview?: boolean;
    /**
     * If true, returns non-indexed properties only.
     */
    nonIndexedPropertiesOnly?: boolean;
  }

  export interface GetPropertiesResponse extends ProtocolResponseWithError {
    /**
     * Object properties.
     */
    result: PropertyDescriptor[];
    /**
     * Internal object properties (only of the element itself).
     */
    internalProperties?: InternalPropertyDescriptor[];
    /**
     * Object private properties.
     */
    privateProperties?: PrivatePropertyDescriptor[];
    /**
     * Exception details.
     */
    exceptionDetails?: ExceptionDetails;
  }

  export interface GlobalLexicalScopeNamesRequest {
    /**
     * Specifies in which execution context to lookup global scope variables.
     */
    executionContextId?: ExecutionContextId;
  }

  export interface GlobalLexicalScopeNamesResponse extends ProtocolResponseWithError {
    names: string[];
  }

  export interface QueryObjectsRequest {
    /**
     * Identifier of the prototype to return objects for.
     */
    prototypeObjectId: RemoteObjectId;
    /**
     * Symbolic group name that can be used to release the results.
     */
    objectGroup?: string;
  }

  export interface QueryObjectsResponse extends ProtocolResponseWithError {
    /**
     * Array with objects.
     */
    objects: RemoteObject;
  }

  export interface ReleaseObjectRequest {
    /**
     * Identifier of the object to release.
     */
    objectId: RemoteObjectId;
  }

  export interface ReleaseObjectGroupRequest {
    /**
     * Symbolic object group name.
     */
    objectGroup: string;
  }

  export interface RunScriptRequest {
    /**
     * Id of the script to run.
     */
    scriptId: ScriptId;
    /**
     * Specifies in which execution context to perform script run. If the parameter is omitted the
     * evaluation will be performed in the context of the inspected page.
     */
    executionContextId?: ExecutionContextId;
    /**
     * Symbolic group name that can be used to release multiple objects.
     */
    objectGroup?: string;
    /**
     * In silent mode exceptions thrown during evaluation are not reported and do not pause
     * execution. Overrides `setPauseOnException` state.
     */
    silent?: boolean;
    /**
     * Determines whether Command Line API should be available during the evaluation.
     */
    includeCommandLineAPI?: boolean;
    /**
     * Whether the result is expected to be a JSON object which should be sent by value.
     */
    returnByValue?: boolean;
    /**
     * Whether preview should be generated for the result.
     */
    generatePreview?: boolean;
    /**
     * Whether execution should `await` for resulting value and return once awaited promise is
     * resolved.
     */
    awaitPromise?: boolean;
  }

  export interface RunScriptResponse extends ProtocolResponseWithError {
    /**
     * Run result.
     */
    result: RemoteObject;
    /**
     * Exception details.
     */
    exceptionDetails?: ExceptionDetails;
  }

  export interface SetAsyncCallStackDepthRequest {
    /**
     * Maximum depth of async call stacks. Setting to `0` will effectively disable collecting async
     * call stacks (default).
     */
    maxDepth: integer;
  }

  export interface SetCustomObjectFormatterEnabledRequest {
    enabled: boolean;
  }

  export interface SetMaxCallStackSizeToCaptureRequest {
    size: integer;
  }

  export interface AddBindingRequest {
    name: string;
    /**
     * If specified, the binding would only be exposed to the specified
     * execution context. If omitted and `executionContextName` is not set,
     * the binding is exposed to all execution contexts of the target.
     * This parameter is mutually exclusive with `executionContextName`.
     * Deprecated in favor of `executionContextName` due to an unclear use case
     * and bugs in implementation (crbug.com/1169639). `executionContextId` will be
     * removed in the future.
     */
    executionContextId?: ExecutionContextId;
    /**
     * If specified, the binding is exposed to the executionContext with
     * matching name, even for contexts created after the binding is added.
     * See also `ExecutionContext.name` and `worldName` parameter to
     * `Page.addScriptToEvaluateOnNewDocument`.
     * This parameter is mutually exclusive with `executionContextId`.
     */
    executionContextName?: string;
  }

  export interface RemoveBindingRequest {
    name: string;
  }

  export interface GetExceptionDetailsRequest {
    /**
     * The error object for which to resolve the exception details.
     */
    errorObjectId: RemoteObjectId;
  }

  export interface GetExceptionDetailsResponse extends ProtocolResponseWithError {
    exceptionDetails?: ExceptionDetails;
  }

  /**
   * Notification is issued every time when binding is called.
   */
  export interface BindingCalledEvent {
    name: string;
    payload: string;
    /**
     * Identifier of the context where the call was made.
     */
    executionContextId: ExecutionContextId;
  }

  export const enum ConsoleAPICalledEventType {
    Log = 'log',
    Debug = 'debug',
    Info = 'info',
    Error = 'error',
    Warning = 'warning',
    Dir = 'dir',
    DirXML = 'dirxml',
    Table = 'table',
    Trace = 'trace',
    Clear = 'clear',
    StartGroup = 'startGroup',
    StartGroupCollapsed = 'startGroupCollapsed',
    EndGroup = 'endGroup',
    Assert = 'assert',
    Profile = 'profile',
    ProfileEnd = 'profileEnd',
    Count = 'count',
    TimeEnd = 'timeEnd',
  }

  /**
   * Issued when console API was called.
   */
  export interface ConsoleAPICalledEvent {
    /**
     * Type of the call.
     */
    type: ConsoleAPICalledEventType;
    /**
     * Call arguments.
     */
    args: RemoteObject[];
    /**
     * Identifier of the context where the call was made.
     */
    executionContextId: ExecutionContextId;
    /**
     * Call timestamp.
     */
    timestamp: Timestamp;
    /**
     * Stack trace captured when the call was made. The async stack chain is automatically reported for
     * the following call types: `assert`, `error`, `trace`, `warning`. For other types the async call
     * chain can be retrieved using `Debugger.getStackTrace` and `stackTrace.parentId` field.
     */
    stackTrace?: StackTrace;
    /**
     * Console context descriptor for calls on non-default console context (not console.*):
     * 'anonymous#unique-logger-id' for call on unnamed context, 'name#unique-logger-id' for call
     * on named context.
     */
    context?: string;
  }

  /**
   * Issued when unhandled exception was revoked.
   */
  export interface ExceptionRevokedEvent {
    /**
     * Reason describing why exception was revoked.
     */
    reason: string;
    /**
     * The id of revoked exception, as reported in `exceptionThrown`.
     */
    exceptionId: integer;
  }

  /**
   * Issued when exception was thrown and unhandled.
   */
  export interface ExceptionThrownEvent {
    /**
     * Timestamp of the exception.
     */
    timestamp: Timestamp;
    exceptionDetails: ExceptionDetails;
  }

  /**
   * Issued when new execution context is created.
   */
  export interface ExecutionContextCreatedEvent {
    /**
     * A newly created execution context.
     */
    context: ExecutionContextDescription;
  }

  /**
   * Issued when execution context is destroyed.
   */
  export interface ExecutionContextDestroyedEvent {
    /**
     * Id of the destroyed context
     */
    executionContextId: ExecutionContextId;
  }

  /**
   * Issued when object should be inspected (for example, as a result of inspect() command line API
   * call).
   */
  export interface InspectRequestedEvent {
    object: RemoteObject;
    hints: any;
    /**
     * Identifier of the context where the call was made.
     */
    executionContextId?: ExecutionContextId;
  }
}

/**
 * This domain is deprecated.
 */
export namespace Schema {

  /**
   * Description of the protocol domain.
   */
  export interface Domain {
    /**
     * Domain name.
     */
    name: string;
    /**
     * Domain version.
     */
    version: string;
  }

  export interface GetDomainsResponse extends ProtocolResponseWithError {
    /**
     * List of supported domains.
     */
    domains: Domain[];
  }
}
