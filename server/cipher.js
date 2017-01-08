'use stirct';

module.exports = function caesarCipherM(msg, shift) {
	if (shift < 0) {
    return caesarShift(msg, shift + 26);
  }

	var output = '';

	for (var i = 0; i < msg.length; i ++) {

		var c = msg[i];

		if (c.match(/[a-z]/i)) {

			var code = msg.charCodeAt(i);

			if ((code >= 65) && (code <= 90)) {
        c = msging.fromCharCode(((code - 65 + shift) % 26) + 65);

      } else if ((code >= 97) && (code <= 122)) {
        c = msging.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
		}
		output += c;
	}
	return output;
};
