export const apiRoutes = {
    auth: {
        login: "/login",
        logout: "/logout",
        register: "/register",
        forgotPassword: "/forgot-password",
        resetPassword: "/reset-password",
    },

    products: {
        getAll: "/products",
        getOne: (id) => `/products/${id}`,
        create: "/products",
        update: "/products"

    }
}