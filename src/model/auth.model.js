const db = require("./../database/sakila.config");

login = async (nik, password) => await db.select(db.raw(
`
a.id,
a.role_id,
a.nik AS nik,
a.name AS name,
b.role_name AS role_name,
b.detail AS role_detail,
group_concat( d.code SEPARATOR ', ' ) AS permissions 
FROM
(((
      mst_user a
      LEFT JOIN mst_user_role b ON ( a.role_id = b.id ))
    LEFT JOIN map_role_permission c ON ( c.role_id = b.id ))
LEFT JOIN mst_user_permission d ON ( d.id = c.permission_id )) 
WHERE a.nik = '${nik}' AND a.password = '${password}'
GROUP BY
a.nik `));

module.exports = {
    login,
}
