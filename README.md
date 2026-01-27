# yêu cầu
❖ Cho mảng dataJson. Link: https://drive.google.com/open?id=1M36QC9s4VreAV68UIRbgfq_VSk5m844i
- Tạo cấu trúc component như sau:
```jsx
<ShoesStore>
< ProductList productsData={products} setStateModal = {this.setStateModal}>
<ProductItem item={product} setStateModal={this.props.setStateModal}> </ProductItem>
<ProductItem item={product} setStateModal={this.props.setStateModal}> </ProductItem>
<ProductItem item={product} setStateModal={this.props.setStateModal}> </ProductItem>
</ ProductList >
<Modal content={this.state.productDetail} />
</ ShoesStore >
```
- Yêu cầu dùng props để tạo giao diện như sau.Có thể
dùng bootstrap, w3css, material … để hổ trợ.
- Thêm component Modal để khi người dùng click vào sẽ
hiện thông tin chi tiết của sản phẩm