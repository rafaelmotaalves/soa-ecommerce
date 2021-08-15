require "test_helper"

class EnderecoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get endereco_index_url
    assert_response :success
  end

  test "should get create" do
    get endereco_create_url
    assert_response :success
  end
end
