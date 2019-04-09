<?php
header("Content-type:text/xml");
echo "<?xml version='1.0' encoding='ISO-8859-1'?>";
echo "<note>";
echo "<from>John</from>";
echo "<to>George</to>";
echo "<message>Don't forget the meeting!</message>";
echo "</note>";
?>