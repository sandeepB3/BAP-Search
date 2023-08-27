NAME="sandeep"
BAP_PORT=6002

expose:
	@echo "Exposing ports ${BAP_PORT} and ${BPP_PORT}"

	concurrently \
		"lt --port ${BAP_PORT} --subdomain ${NAME}-bap" \
		"lt --port ${BAP_PORT} --subdomain ${NAME}-bap1" \
		"lt --port ${BAP_PORT} --subdomain ${NAME}-bap2" \