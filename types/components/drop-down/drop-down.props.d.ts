export function useDropDownProps({ options, defaultOption, value, onChange, fn }: {
    options: any;
    defaultOption: any;
    value: any;
    onChange: any;
    fn?: () => any;
}): {
    open: boolean;
    activeValue: any;
    toggleDropdown: () => void;
    _onChange: (value: any, e: any) => void;
};
//# sourceMappingURL=drop-down.props.d.ts.map