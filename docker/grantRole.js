admin = db.getSiblingDB("admin")

admin.grantRolesToUser("punisher", ["root", { role: "root", db: "admin" }])