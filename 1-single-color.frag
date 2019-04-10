precision mediump float;

void main() {
  gl_FragColor = vec4(0, 1, 0, 1);
  gl_FragColor = vec4(1, 0, 0, 1);
  gl_FragColor = vec4(0, 0, 1, 1);
  gl_FragColor = vec4(vec3(1, 0, 0), 1);
  gl_FragColor = vec4(vec3(0, 1, 0), 1);
  gl_FragColor = vec4(vec3(0, 0, 1), 1);
}
