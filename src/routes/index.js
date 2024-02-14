module.exports = {
    init(app) {
        const departmentRoute = require("./department")(app);
        return {
            departmentRoute
        };
    }
}
