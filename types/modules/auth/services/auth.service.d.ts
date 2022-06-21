export class AuthService {
    constructor(api: any);
    api: any;
    logout: (tokenId: any) => any;
    sendCode: (phone: any) => any;
    /**
     * Confirm auth code
     * @param {Object} data - Confirm request data
     * @param {string} data.code - Secret code sended phone
     * @param {string} data.device - Device
     * @param {string} data.phone - Code sended phone
     * @param {string} data.secret - Secret
     */
    confirmCode: (data: {
        code: string;
        device: string;
        phone: string;
        secret: string;
    }) => any;
    /**
     * Confirm auth code
     * @param {Object} data - Confirm request data
     * @param {string} data.code - Secret code sended phone
     * @param {string} data.device - Device
     * @param {string} data.name - User name
     * @param {string} data.phone - Code sended phone
     * @param {string} data.secret - Secret
     */
    register: (data: {
        code: string;
        device: string;
        name: string;
        phone: string;
        secret: string;
    }) => any;
    refreshTokens: (refreshToken: any) => any;
}
export const authService: AuthService;
//# sourceMappingURL=auth.service.d.ts.map