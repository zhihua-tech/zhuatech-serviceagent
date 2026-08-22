/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.serviceagent.service;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.springframework.stereotype.Service;

import java.util.List;

/** 客户回复安全门：涉及隐私、退款、赔付或高情绪风险时升级人工坐席。 */
@Service
public class CustomerResponseGuardService {
    public record ResponseRequest(
            @NotBlank String ticketNo,
            @NotBlank String channel,
            @Min(0) @Max(100) int emotionRisk,
            boolean containsSensitiveData,
            boolean refundOrCompensation,
            boolean supervisorApproved) {}

    public record ResponseDecision(
            boolean sendAllowed,
            String route,
            int priority,
            List<String> controls) {}

    public ResponseDecision inspect(ResponseRequest request) {
        boolean humanReview = request.containsSensitiveData()
                || request.refundOrCompensation()
                || request.emotionRisk() >= 65;
        boolean allowed = !humanReview || request.supervisorApproved();
        String route = request.refundOrCompensation() ? "SUPERVISOR_APPROVAL"
                : request.containsSensitiveData() ? "PRIVACY_REVIEW"
                : request.emotionRisk() >= 65 ? "HUMAN_TAKEOVER" : "DRAFT_RESPONSE";
        int priority = Math.min(100, request.emotionRisk()
                + (request.refundOrCompensation() ? 20 : 0)
                + (request.containsSensitiveData() ? 15 : 0));
        return new ResponseDecision(allowed, route, priority, List.of(
                "回复必须引用当前产品和服务政策",
                "默认遮蔽手机号、地址与身份凭证",
                "退款、赔付和投诉结案保留人工签署"));
    }
}
