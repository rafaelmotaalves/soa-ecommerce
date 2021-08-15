require "test_helper"

class ClienteControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get cliente_create_url
    assert_response :success
  end
end
