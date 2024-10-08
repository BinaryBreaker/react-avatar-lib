import React, { CSSProperties, MouseEventHandler, TouchEventHandler } from 'react';

type BorderType = [number, number] | number;
interface ImageState {
    x: number;
    y: number;
    width?: number;
    height?: number;
    resource?: HTMLImageElement;
}
interface Props {
    width: number;
    height: number;
    style?: CSSProperties;
    image?: string | File;
    border?: BorderType;
    position?: Position;
    scale?: number;
    rotate?: number;
    borderRadius?: number;
    crossOrigin?: '' | 'anonymous' | 'use-credentials';
    onLoadFailure?: () => void;
    onLoadSuccess?: (image: ImageState) => void;
    onImageReady?: () => void;
    onImageChange?: () => void;
    onMouseUp?: () => void;
    reflectImage?: () => void;
    onMouseMove?: (e: TouchEvent | MouseEvent) => void;
    onPositionChange?: (position: Position) => void;
    color?: [number, number, number, number?];
    backgroundColor?: string;
    disableBoundaryChecks?: boolean;
    disableHiDPIScaling?: boolean;
    disableCanvasRotation?: boolean;
}
interface Position {
    x: number;
    y: number;
}
interface State {
    drag: boolean;
    mx?: number;
    my?: number;
    image: ImageState;
}
type PropsWithDefaults = typeof AvatarEditor.defaultProps & Omit<Props, keyof typeof AvatarEditor.defaultProps>;
declare class AvatarEditor extends React.Component<PropsWithDefaults, State> {
    private canvas;
    private pixelRatio;
    static defaultProps: {
        scale: number;
        rotate: number;
        border: number;
        borderRadius: number;
        width: number;
        height: number;
        color: number[];
        showGrid: boolean;
        gridColor: string;
        reflectImage: boolean;
        disableBoundaryChecks: boolean;
        disableHiDPIScaling: boolean;
        disableCanvasRotation: boolean;
        widthText: string;
        heightText: string;
    };
    state: State;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PropsWithDefaults, prevState: State): void;
    private getCanvas;
    reflecting: boolean;
    canvas2: HTMLCanvasElement;
    reflectImage(): void;
    private getContext;
    componentWillUnmount(): void;
    isVertical(): boolean;
    getBorders(border?: number): number[] | (number & any[]);
    getDimensions(): {
        canvas: {
            width: number;
            height: number;
        };
        rotate: number;
        width: number;
        height: number;
        border: number;
    };
    getBlob(): string;
    saveCropImage(name: string): void;
    getImage(): HTMLCanvasElement;
    /**
     * Get the image scaled to original canvas size.
     * This was default in 4.x and is now kept as a legacy method.
     */
    getImageScaledToCanvas(): HTMLCanvasElement;
    getXScale(): number;
    getYScale(): number;
    getCroppingRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    loadImage(file: File | string): Promise<void>;
    handleImageReady: (image: HTMLImageElement) => void;
    getInitialSize(width: number, height: number): {
        height: number;
        width: number;
    };
    clearImage: () => void;
    paintImage(context: CanvasRenderingContext2D, image: ImageState, border: number, scaleFactor?: number): void;
    calculatePosition(image?: ImageState, border?: number): {
        x: number;
        y: number;
        height: number;
        width: number;
    };
    paint(context: CanvasRenderingContext2D): void;
    handleMouseDown: MouseEventHandler<HTMLCanvasElement>;
    handleTouchStart: TouchEventHandler<HTMLCanvasElement>;
    handleMouseUp: () => void;
    handleMouseMove: (e: MouseEvent | TouchEvent) => void;
    render(): React.DetailedReactHTMLElement<{
        ref: React.RefObject<HTMLCanvasElement>;
        reflectImage: boolean;
        key?: React.Key | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        autoFocus?: boolean | undefined;
        className?: string | undefined;
        contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: (boolean | "true" | "false") | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        placeholder?: string | undefined;
        slot?: string | undefined;
        spellCheck?: (boolean | "true" | "false") | undefined;
        style?: React.CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;
        radioGroup?: string | undefined;
        role?: React.AriaRole | undefined;
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
        inputMode?: "search" | "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
        is?: string | undefined;
        "aria-activedescendant"?: string | undefined;
        "aria-atomic"?: (boolean | "true" | "false") | undefined;
        "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
        "aria-braillelabel"?: string | undefined;
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: (boolean | "true" | "false") | undefined;
        "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
        "aria-colcount"?: number | undefined;
        "aria-colindex"?: number | undefined;
        "aria-colindextext"?: string | undefined;
        "aria-colspan"?: number | undefined;
        "aria-controls"?: string | undefined;
        "aria-current"?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
        "aria-describedby"?: string | undefined;
        "aria-description"?: string | undefined;
        "aria-details"?: string | undefined;
        "aria-disabled"?: (boolean | "true" | "false") | undefined;
        "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
        "aria-errormessage"?: string | undefined;
        "aria-expanded"?: (boolean | "true" | "false") | undefined;
        "aria-flowto"?: string | undefined;
        "aria-grabbed"?: (boolean | "true" | "false") | undefined;
        "aria-haspopup"?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
        "aria-hidden"?: (boolean | "true" | "false") | undefined;
        "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
        "aria-keyshortcuts"?: string | undefined;
        "aria-label"?: string | undefined;
        "aria-labelledby"?: string | undefined;
        "aria-level"?: number | undefined;
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        "aria-modal"?: (boolean | "true" | "false") | undefined;
        "aria-multiline"?: (boolean | "true" | "false") | undefined;
        "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        "aria-owns"?: string | undefined;
        "aria-placeholder"?: string | undefined;
        "aria-posinset"?: number | undefined;
        "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
        "aria-readonly"?: (boolean | "true" | "false") | undefined;
        "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        "aria-required"?: (boolean | "true" | "false") | undefined;
        "aria-roledescription"?: string | undefined;
        "aria-rowcount"?: number | undefined;
        "aria-rowindex"?: number | undefined;
        "aria-rowindextext"?: string | undefined;
        "aria-rowspan"?: number | undefined;
        "aria-selected"?: (boolean | "true" | "false") | undefined;
        "aria-setsize"?: number | undefined;
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        "aria-valuemax"?: number | undefined;
        "aria-valuemin"?: number | undefined;
        "aria-valuenow"?: number | undefined;
        "aria-valuetext"?: string | undefined;
        children?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string | TrustedHTML;
        } | undefined;
        onCopy?: React.ClipboardEventHandler<HTMLCanvasElement> | undefined;
        onCopyCapture?: React.ClipboardEventHandler<HTMLCanvasElement> | undefined;
        onCut?: React.ClipboardEventHandler<HTMLCanvasElement> | undefined;
        onCutCapture?: React.ClipboardEventHandler<HTMLCanvasElement> | undefined;
        onPaste?: React.ClipboardEventHandler<HTMLCanvasElement> | undefined;
        onPasteCapture?: React.ClipboardEventHandler<HTMLCanvasElement> | undefined;
        onCompositionEnd?: React.CompositionEventHandler<HTMLCanvasElement> | undefined;
        onCompositionEndCapture?: React.CompositionEventHandler<HTMLCanvasElement> | undefined;
        onCompositionStart?: React.CompositionEventHandler<HTMLCanvasElement> | undefined;
        onCompositionStartCapture?: React.CompositionEventHandler<HTMLCanvasElement> | undefined;
        onCompositionUpdate?: React.CompositionEventHandler<HTMLCanvasElement> | undefined;
        onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLCanvasElement> | undefined;
        onFocus?: React.FocusEventHandler<HTMLCanvasElement> | undefined;
        onFocusCapture?: React.FocusEventHandler<HTMLCanvasElement> | undefined;
        onBlur?: React.FocusEventHandler<HTMLCanvasElement> | undefined;
        onBlurCapture?: React.FocusEventHandler<HTMLCanvasElement> | undefined;
        onChange?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onChangeCapture?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onBeforeInput?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onBeforeInputCapture?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onInput?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onInputCapture?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onReset?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onResetCapture?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onSubmit?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onSubmitCapture?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onInvalid?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onInvalidCapture?: React.FormEventHandler<HTMLCanvasElement> | undefined;
        onLoad?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onLoadCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onError?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onErrorCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onKeyDown?: React.KeyboardEventHandler<HTMLCanvasElement> | undefined;
        onKeyDownCapture?: React.KeyboardEventHandler<HTMLCanvasElement> | undefined;
        onKeyPress?: React.KeyboardEventHandler<HTMLCanvasElement> | undefined;
        onKeyPressCapture?: React.KeyboardEventHandler<HTMLCanvasElement> | undefined;
        onKeyUp?: React.KeyboardEventHandler<HTMLCanvasElement> | undefined;
        onKeyUpCapture?: React.KeyboardEventHandler<HTMLCanvasElement> | undefined;
        onAbort?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onAbortCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onCanPlay?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onCanPlayCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onCanPlayThrough?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onCanPlayThroughCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onDurationChange?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onDurationChangeCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onEmptied?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onEmptiedCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onEncrypted?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onEncryptedCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onEnded?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onEndedCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onLoadedData?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onLoadedDataCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onLoadedMetadata?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onLoadedMetadataCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onLoadStart?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onLoadStartCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onPause?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onPauseCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onPlay?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onPlayCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onPlaying?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onPlayingCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onProgress?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onProgressCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onRateChange?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onRateChangeCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onResize?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onResizeCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onSeeked?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onSeekedCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onSeeking?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onSeekingCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onStalled?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onStalledCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onSuspend?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onSuspendCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onTimeUpdate?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onTimeUpdateCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onVolumeChange?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onVolumeChangeCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onWaiting?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onWaitingCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onAuxClick?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onAuxClickCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onClick?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onClickCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onContextMenu?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onContextMenuCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onDoubleClick?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onDoubleClickCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onDrag?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragCapture?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragEnd?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragEndCapture?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragEnter?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragEnterCapture?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragExit?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragExitCapture?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragLeave?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragLeaveCapture?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragOver?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragOverCapture?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragStart?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDragStartCapture?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDrop?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onDropCapture?: React.DragEventHandler<HTMLCanvasElement> | undefined;
        onMouseDown?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseDownCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseEnter?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseLeave?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseMove?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseMoveCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseOut?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseOutCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseOver?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseOverCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseUp?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onMouseUpCapture?: React.MouseEventHandler<HTMLCanvasElement> | undefined;
        onSelect?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onSelectCapture?: React.ReactEventHandler<HTMLCanvasElement> | undefined;
        onTouchCancel?: React.TouchEventHandler<HTMLCanvasElement> | undefined;
        onTouchCancelCapture?: React.TouchEventHandler<HTMLCanvasElement> | undefined;
        onTouchEnd?: React.TouchEventHandler<HTMLCanvasElement> | undefined;
        onTouchEndCapture?: React.TouchEventHandler<HTMLCanvasElement> | undefined;
        onTouchMove?: React.TouchEventHandler<HTMLCanvasElement> | undefined;
        onTouchMoveCapture?: React.TouchEventHandler<HTMLCanvasElement> | undefined;
        onTouchStart?: React.TouchEventHandler<HTMLCanvasElement> | undefined;
        onTouchStartCapture?: React.TouchEventHandler<HTMLCanvasElement> | undefined;
        onPointerDown?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerDownCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerMove?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerMoveCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerUp?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerUpCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerCancel?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerCancelCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerEnter?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerEnterCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerLeave?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerLeaveCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerOver?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerOverCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerOut?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onPointerOutCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onGotPointerCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onLostPointerCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLCanvasElement> | undefined;
        onScroll?: React.UIEventHandler<HTMLCanvasElement> | undefined;
        onScrollCapture?: React.UIEventHandler<HTMLCanvasElement> | undefined;
        onWheel?: React.WheelEventHandler<HTMLCanvasElement> | undefined;
        onWheelCapture?: React.WheelEventHandler<HTMLCanvasElement> | undefined;
        onAnimationStart?: React.AnimationEventHandler<HTMLCanvasElement> | undefined;
        onAnimationStartCapture?: React.AnimationEventHandler<HTMLCanvasElement> | undefined;
        onAnimationEnd?: React.AnimationEventHandler<HTMLCanvasElement> | undefined;
        onAnimationEndCapture?: React.AnimationEventHandler<HTMLCanvasElement> | undefined;
        onAnimationIteration?: React.AnimationEventHandler<HTMLCanvasElement> | undefined;
        onAnimationIterationCapture?: React.AnimationEventHandler<HTMLCanvasElement> | undefined;
        onTransitionEnd?: React.TransitionEventHandler<HTMLCanvasElement> | undefined;
        onTransitionEndCapture?: React.TransitionEventHandler<HTMLCanvasElement> | undefined;
    }, HTMLCanvasElement>;
}

export { type Position, type Props, AvatarEditor as default };
