<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'larsiversen_nu' );

/** MySQL database username */
define( 'DB_USER', 'larsiversen_nu' );

/** MySQL database password */
define( 'DB_PASSWORD', 'RGUG7XEiGTC32LoYjryyxyRn' );

/** MySQL hostname */
define( 'DB_HOST', 'larsiversen.nu.mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9<Esc#]+f~lznos*t:h8 B9|rh<{2#7xq7fnNh|-}J(*3(Dtgh]7UQGqD_|=5WQM');
define('SECURE_AUTH_KEY',  '+]*P@=9#<k/u;{}c-U|l~]|Ttu$Ctt-nJx{ypnZh5I8#,{ F-7fSeNNK!8U@1zF^');
define('LOGGED_IN_KEY',    '`!jd3Op.9(EJB*f6KtP&|GCRE;$d ;F?S>CoK>aHJgQYAPR%uUb|p}&B1@5/y[O5');
define('NONCE_KEY',        'dC|vb%OoK/?%{vNQ0:Xzcwt$%$3I|EC0H9kfYC|.D2!Z3>Q(~O1i-%SJY-Ed-+<7');
define('AUTH_SALT',        't9W|uZE[*{1+8|DP(N,{>h8j_)FG}dJw~dW)sF&6%]WCS|U|U0;Zm!Z^*[4+]-&u');
define('SECURE_AUTH_SALT', 'O_5oRiSV<K1E!w/YcA93!kpaNpV-Qxvbr,8 wx8qV_z1^Zsk@8MVe(Y{T>5c~t,p');
define('LOGGED_IN_SALT',   ' +K0W:*~iaR,Er|4#CW/mu|.cJ7I^P[|lKOQvm39&MT$=5e+Wj?K^u8XT8WP+y=/');
define('NONCE_SALT',       'Y45Us+V}`_%f{?64l]B_+dQ`(SV68[Df>-pUrw2(bAD2=oR5k1 hMABJQO53A3Xf');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'grumswp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
