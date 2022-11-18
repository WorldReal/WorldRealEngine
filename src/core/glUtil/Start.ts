/**
 * _ 私有属性和方法
 *
 * 无状态或纯pipe式处理 静态工具类
 */
class Start {

  // constructor(){

  // }

  /**
   * 编译shader代码
   * @param {WebGLRenderingContext} gl
   * @param {number} type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
   * @param {string} source shader代码
   *  const vertexShader = _loadShader(gl, gl.VERTEX_SHADER, vsSource);
   * @returns
   */
  static _loadShader(gl: WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type) as WebGLShader
    gl.shaderSource(shader, source) // 提供shader代码  绑定资源
    gl.compileShader(shader) // 编译 -> 生成着色器
    // debugger
    // if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    //   console.error(gl.getShaderInfoLog(shader))
    //   gl.deleteShader(shader)
    //   return null
    // }
    return shader
  }

  /**
   * 初始化一个着色程序
   * @param {WebGLRenderingContext} gl
   * @param {string} vsSource
   * @param {string} fsSource
   * @returns
   */
  static initShaderProgram(
    gl: WebGLRenderingContext,
    vsSource: string,
    fsSource: string
  ) {
    const vertexShader = this._loadShader(gl, gl.VERTEX_SHADER, vsSource)
    const fragmentShader = this._loadShader(gl, gl.FRAGMENT_SHADER, fsSource)

    // Create the shader program

    const shaderProgram = gl.createProgram() as WebGLProgram
    gl.attachShader(shaderProgram, vertexShader)
    gl.attachShader(shaderProgram, fragmentShader)
    gl.linkProgram(shaderProgram)
    return shaderProgram
  }
}

export { Start }
