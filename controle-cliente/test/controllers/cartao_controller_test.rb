require "test_helper"

class CartaoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cartao_index_url
    assert_response :success
  end

  test "should get create" do
    get cartao_create_url
    assert_response :success
  end
end
