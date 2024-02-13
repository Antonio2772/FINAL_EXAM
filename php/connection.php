<?php
function dbconnection() {
	$server = '172.20.0.167';
	$user = 'ETU002772';
	$password = 'Zk6jeSBjAMmB';
	$dbName = 'db_p16_ETU002772';

	static $connect = null;
	if ($connect === null) {
		$connect = mysqli_connect($server, $user, $password, $dbName);
	}
	return $connect;
}
?>