export function useShakaPlayerProps({ src, watermark }: {
    src: any;
    watermark: any;
}): {
    videoRef: any;
    containerRef: import("react").MutableRefObject<undefined>;
    ended: boolean;
    loadError: boolean;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    showPrevNext: boolean;
    handleSetActive: (item: any) => void;
    updateVideoTime: any;
    isSafari: boolean;
};
//# sourceMappingURL=shaka-player.props.d.ts.map