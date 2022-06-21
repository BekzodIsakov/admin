export class ErrorBoundary {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    constructor(props: any);
    state: {
        hasError: boolean;
    };
    componentDidCatch(error: any): void;
    cancelToast: () => void;
    render(): JSX.Element;
}
//# sourceMappingURL=error-boundary.component.d.ts.map