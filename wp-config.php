<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
define( 'FORCE_SSL_ADMIN', true ); // Redirect All HTTP Page Requests to HTTPS - Security > Settings > Enforce SSL
// END iThemes Security - Do not modify or remove this line

define( 'WP_CACHE', true );
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
define( 'DB_NAME', 'u629817834_nrwqV' );

/** MySQL database username */
define( 'DB_USER', 'u629817834_sanny' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Palaksanny2705' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '#Svc9aQG)eZQ@No&|TA@$8BHV/&tiQOc8Ka^DU]O|bj!obz}w~WNtk!w7_QmyrYJ' );
define( 'SECURE_AUTH_KEY',   'fY|LfN<6+9i/haGA_(]M_5q7y2F?E^9JnP@g%j7fW1+dY^dBV2o>IN,rI67b|+j$' );
define( 'LOGGED_IN_KEY',     '.}xbrp?m~S0$d3K>i4F2W*Z&9./wx? |uly FbzwVwWlX<2OT){=Lav1D/D`Vq03' );
define( 'NONCE_KEY',         'EuWzZA%NWQ~} V!5@rjW ^?6, 7:!|j8S-~t-sHtI@=  vdagMhp_e=PX%JQ#TuU' );
define( 'AUTH_SALT',         'YYk7eWBn=1da5n0.j)5W.{P<G(~?YuPY=w{dKrnGfqOu$qsGQ!7W-=Hm[22Ff9m6' );
define( 'SECURE_AUTH_SALT',  'aBXP%d%`:=c]>}w0F~32QkBjli(?_o{s_cuFZsK~l/=)M6bct#;bIz}OV:n*&W(E' );
define( 'LOGGED_IN_SALT',    '|HQG`Q&)0,;Qn~.`h|1iu#Q ?!.=e#~~F,/;4=ZL+hk^)m.O|#yFU?WOGJWyD74q' );
define( 'NONCE_SALT',        'a(~}ibAX^cO;$U@S?;[f&!Sf.x1.VctW86T|4l3naVN4rl[AJpF[SVs-wTi^OOjq' );
define( 'WP_CACHE_KEY_SALT', 'J??#~nmh}^$>6L{O*bmgswCwQVC&G<0AH],&cBZgwYiQ=oTnlePDY.#R3d.6SHHw' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
