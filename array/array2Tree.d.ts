interface ynw {
  /**
   * 将数组转化为树形结构
   *
   * @param nodes 要转换的数据
   * @param options 配置转换的字段 
   * @return 返回一个树形结构数组
   */
   array2Tree(nodes?: array, options?: object): array;
}